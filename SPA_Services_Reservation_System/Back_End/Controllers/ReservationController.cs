using System;
using Microsoft.AspNetCore.Mvc;
using SPA_Services_Reservation_System.Back_End.Models;
using SPA_Services_Reservation_System.Back_End.Services;

namespace SPA_Services_Reservation_System.Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpPost]
        public IActionResult CreateReservation([FromBody] Reservation reservation)
        {
            try
            {
                _reservationService.CreateReservation(reservation, out bool error);
                return error ? (IActionResult) BadRequest("Rezervacija nepavyko") : Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult PayForReservation([FromBody] Reservation reservation)
        {
            try
            {
                _reservationService.Pay(reservation.ReservationId ?? 0, reservation.TotalAmount);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CancelReservation([FromBody] Reservation reservation)
        {
            try
            {
                _reservationService.Cancel(reservation.ReservationId ?? 0);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}