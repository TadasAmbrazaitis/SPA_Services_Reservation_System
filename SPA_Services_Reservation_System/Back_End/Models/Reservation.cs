using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Services_Reservation_System.Back_End.Models
{
    [Table("Reservation")]
    public class Reservation
    {
        [Key]
        public int? ReservationId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public double TotalAmount { get; set; }
        public int CustomerId { get; set; }
        public string SpaServiceIds { get; set; }
        public string PaymentMethod { get; set; }
        public string TimePreference { get; set; }
        public string Status { get; set; }
        public virtual List<ReservationSpaService> ReservationSpaServices { get; set; }
    }
}