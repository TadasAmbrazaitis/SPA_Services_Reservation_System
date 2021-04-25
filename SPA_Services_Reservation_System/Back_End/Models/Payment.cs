using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Services_Reservation_System.Back_End.Models
{
    [Table("Payment")]
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        public int ReservationId { get; set; }
        public double TotalAmount { get; set; }
        public int CustomerId { get; set; }
        public bool Canceled { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}