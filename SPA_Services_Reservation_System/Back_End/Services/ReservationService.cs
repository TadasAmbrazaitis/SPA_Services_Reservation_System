using SPA_Services_Reservation_System.Back_End.Helpers;
using SPA_Services_Reservation_System.Back_End.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public class ReservationService : IReservationService
    {

        private readonly DBContext _dbContext;

        public ReservationService(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void CreateReservation(Reservation reservationInput, out bool error)
        {
            var reservation = new Reservation
            {
                Start = reservationInput.Start.Date.AddDays(1),
                End = reservationInput.End.Date.AddDays(1).AddHours(20),
                TotalAmount = reservationInput.TotalAmount,
                CustomerId = reservationInput.CustomerId,
                SpaServiceIds = reservationInput.SpaServiceIds,
                PaymentMethod = reservationInput.PaymentMethod,
                Status = reservationInput.Status,
                TimePreference = reservationInput.TimePreference
            };

            _dbContext.Reservations.Add(reservation);
            _dbContext.SaveChanges();

            var reservationId = reservation.ReservationId;
            CreateReservationSpaServices(reservation, reservationId);

            error = false;

            var reservedSpaServices = from s in _dbContext.ReservationSpaServices
                where s.ReservationId == reservationId && s.SpaSpecialistId == -1
                select new ReservationSpaService
                {
                    SpaSpecialistId = s.SpaSpecialistId,
                    ReservationId = s.ReservationId,
                    ReservationSpaServiceId = s.ReservationSpaServiceId
                };
            if (!reservedSpaServices.Any()) return;
            error = true;
            _dbContext.ReservationSpaServices.RemoveRange
                (_dbContext.ReservationSpaServices.Where(r => r.ReservationId == reservationId));
            var reservationToRemove = _dbContext.Reservations.SingleOrDefault(x => x.ReservationId == reservationId);
            _dbContext.Reservations.Remove(reservationToRemove ?? throw new InvalidOperationException());
            _dbContext.SaveChanges();
        }

        public void CreateReservationSpaServices(Reservation reservation, int? reservationId)
        {
            var intSpaServiceIds = reservation.SpaServiceIds.Split(',').Select(int.Parse).ToArray();
            foreach (var spaServiceId in intSpaServiceIds)
            {
                var rsp = new ReservationSpaService
                {
                    ReservationId = reservationId ?? 0,
                    SpaServiceId = spaServiceId
                };

                var spaService = from s in _dbContext.SpaServices
                                 where s.SpaServiceId == spaServiceId
                                 select new SpaService
                                 {
                                     SpaServiceId = s.SpaServiceId,
                                     Title = s.Title,
                                     Category = s.Category,
                                     DurationMinutes = s.DurationMinutes,
                                     Price = s.Price,
                                     Description = s.Description
                                 };

                rsp.Title = spaService.FirstOrDefault().Title;
                rsp.DurationMinutes = spaService.FirstOrDefault().DurationMinutes;
                rsp.Category = spaService.FirstOrDefault().Category;
                rsp.Status = reservation.Status;
                rsp.CustomerId = reservation.CustomerId;

                var rnd = new Random();
                rsp.Cabinet = rnd.Next(1, 150) + " Kabinetas";

                GenerateSchedule(spaService.FirstOrDefault().Category,
                                 reservation.Start,
                                 reservation.End,
                                 reservation.TimePreference,
                                 spaService.FirstOrDefault().DurationMinutes,
                                 reservation.CustomerId,
                                 out DateTime serviceStart,
                                 out DateTime serviceEnd,
                                 out int specialistId);

                rsp.Start = serviceStart;
                rsp.End = serviceEnd;
                rsp.SpaSpecialistId = specialistId;

                _dbContext.ReservationSpaServices.Add(rsp);
                _dbContext.SaveChanges();
            }
        }

        public void Pay(int id, double totalAmount)
        {
            var paymentDate = DateTime.Now;
            var payment = new Payment
            {
                ReservationId = id,
                TotalAmount = totalAmount,
                PaymentDate = paymentDate,
                Canceled = false
            };

            var reservation = _dbContext.Reservations.FirstOrDefault(r => r.ReservationId == id);
            reservation.Status = "Apmokėta";

            var reservationSpaServices = _dbContext.ReservationSpaServices.Where(r => r.ReservationId == id).ToList();
            reservationSpaServices.ForEach(r => r.Status = "Apmokėta");

            payment.CustomerId = reservation.CustomerId;

            _dbContext.Payments.Add(payment);
            _dbContext.SaveChanges();
        }

        public void Cancel(int id)
        {
            _dbContext.ReservationSpaServices.RemoveRange
                (_dbContext.ReservationSpaServices.Where(r => r.ReservationId == id));
            var reservationToRemove = _dbContext.Reservations.SingleOrDefault(x => x.ReservationId == id);
            if (reservationToRemove != null) _dbContext.Reservations.Remove(reservationToRemove);

            var payment = _dbContext.Payments.FirstOrDefault(r => r.ReservationId == id);
            if (payment != null) payment.Canceled = true;

            _dbContext.SaveChanges();
        }

        public void GenerateSchedule(
            string category,
            DateTime reservationStart,
            DateTime reservationEnd,
            string timePreference,
            int durationMinutes,
            int customerId,
            out DateTime start,
            out DateTime end,
            out int spaSpecialistId)
        {
            start = DateTime.Now;
            end = DateTime.Now;
            spaSpecialistId = -1;

            var listOfSpaSpecialists = (from s in _dbContext.SpaSpecialists
                                        where s.Categories.Contains("," + category + ",") || s.Categories.StartsWith(category + ",")
                                        || s.Categories.EndsWith("," + category) || s.Categories.Contains(category)
                                        select new SpaSpecialist
                                        {
                                            SpaSpecialistId = s.SpaSpecialistId,
                                            EmailAddress = s.EmailAddress,
                                            FirstName = s.FirstName,
                                            LastName = s.LastName,
                                            PhoneNumber = s.PhoneNumber,
                                            Categories = s.Categories,
                                            ReservationSpaServices = s.ReservationSpaServices
                                        }).ToList();

            int preferredHoursStart;
            int preferredHoursEnd;

            switch (timePreference)
            {
                case "Ryte":
                    preferredHoursStart = 8;
                    preferredHoursEnd = 12;
                    break;
                case "Dieną":
                    preferredHoursStart = 14;
                    preferredHoursEnd = 18;
                    break;
                default:
                    preferredHoursStart = 8;
                    preferredHoursEnd = 18;
                    break;
            }

            var dates = new List<DateTime>();

            for (var dt = reservationStart; dt <= reservationEnd; dt = dt.AddDays(1))
            {
                dates.Add(dt);
            }

            foreach (var day in dates.OrderBy(a => Guid.NewGuid()))
            {
                foreach (var specialist in listOfSpaSpecialists.OrderBy(a => Guid.NewGuid()))
                {
                    var resDayStart = day.AddHours(preferredHoursStart);
                    var resDayEnd = day.AddHours(preferredHoursEnd);

                    var listOfSpecialistReservationServices = specialist.ReservationSpaServices
                        .Where(x => x.Start.Day == day.Day && x.Start.Hour >= preferredHoursStart && x.End.Hour <= preferredHoursEnd)
                        .ToList();

                    var listOfCustomerReservationServices = (from s in _dbContext.ReservationSpaServices
                        where s.CustomerId == customerId && s.Start.Day == day.Day && s.Start.Hour >= preferredHoursStart && s.End.Hour <= preferredHoursEnd
                        select new ReservationSpaService
                        {
                            Start = s.Start,
                            End = s.End
                        }).ToList();

                    while (resDayStart.AddMinutes(durationMinutes) <= resDayEnd)
                    {
                        if (timePreference == "Nesvarbu")
                        {
                            if (resDayStart.Hour == 12 || resDayStart.AddMinutes(durationMinutes).Hour == 12)
                            {
                                resDayStart = resDayStart.Date.AddHours(14);
                            }
                        }

                        if (listOfSpecialistReservationServices.Any(specialistReservationService =>
                            resDayStart <= specialistReservationService.End &&
                            specialistReservationService.Start <= resDayStart.AddMinutes(durationMinutes)))
                        {
                            resDayStart = resDayStart.AddMinutes(durationMinutes).AddMinutes(10);
                            continue;
                        }

                        if (listOfCustomerReservationServices.Any(customerReservationService =>
                            resDayStart <= customerReservationService.End &&
                            customerReservationService.Start <= resDayStart.AddMinutes(durationMinutes)))
                        {
                            resDayStart = resDayStart.AddMinutes(durationMinutes).AddMinutes(10);
                            continue;
                        }

                        spaSpecialistId = specialist.SpaSpecialistId;
                        start = resDayStart;
                        end = resDayStart.AddMinutes(durationMinutes);
                        return;
                    }
                }
            }
        }
    }
}