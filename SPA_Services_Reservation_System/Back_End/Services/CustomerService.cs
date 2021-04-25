using SPA_Services_Reservation_System.Back_End.Helpers;
using SPA_Services_Reservation_System.Back_End.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly DBContext _dbContext;

        public CustomerService(DBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Customer Authenticate(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || (string.IsNullOrEmpty(password)))
            {
                return null;
            }

            var customer = _dbContext.Customers.SingleOrDefault(x => x.EmailAddress == email);

            if (customer == null)
            {
                return null;
            }

            return !VerifyPasswordHash(password, customer.PasswordHash, customer.PasswordSalt) ? null : customer;
        }

        public Customer Register(Customer customer, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ApplicationException("Slaptažodis privalomas!");
            }

            if (!IsValidEmail(customer.EmailAddress))
            {
                throw new ApplicationException("Įveskite tinkamą el. paštą!");
            }

            if (_dbContext.Customers.Any(x => x.EmailAddress == customer.EmailAddress))
            {
                throw new ApplicationException("Vartotojo el. paštas " + customer.EmailAddress + " jau užimtas");
            }

            CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

            customer.PasswordHash = passwordHash;
            customer.PasswordSalt = passwordSalt;

            _dbContext.Customers.Add(customer);
            _dbContext.SaveChanges();

            return customer;
        }

        public List<Reservation> GetCustomerReservations(int customerId)
        {
            var reservations = (from r in _dbContext.Reservations
                                where r.CustomerId == customerId
                                select new Reservation
                                {
                                    ReservationId = r.ReservationId ?? 0,
                                    Start = r.Start,
                                    End = r.End,
                                    TotalAmount = r.TotalAmount,
                                    SpaServiceIds = r.SpaServiceIds,
                                    PaymentMethod = r.PaymentMethod,
                                    Status = r.Status,
                                    TimePreference = r.TimePreference,
                                    ReservationSpaServices = r.ReservationSpaServices
                                }).ToList();

            return reservations;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException(nameof(password));
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Slaptažodis negali būti tuščias. ", nameof(password));

            using var hmac = new System.Security.Cryptography.HMACSHA512();
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException(nameof(password));
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Slaptažodis negali būti tuščias. ", nameof(password));

            using var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt);
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return !computedHash.Where((t, i) => t != storedHash[i]).Any();
        }

        static bool IsValidEmail(string email)
        {
            try
            {
                var address = new System.Net.Mail.MailAddress(email);
                return address.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}