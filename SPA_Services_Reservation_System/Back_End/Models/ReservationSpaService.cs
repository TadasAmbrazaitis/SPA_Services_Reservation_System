using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Services_Reservation_System.Back_End.Models
{
    [Table("ReservationSpaService")]
    public class ReservationSpaService
    {
        [Key]
        public int ReservationSpaServiceId { get; set; }
        public int ReservationId { get; set; }
        public int SpaServiceId { get; set; }
        public string Title { get; set; }
        public int DurationMinutes { get; set; }
        public string Status { get; set; }
        public int SpaSpecialistId { get; set; }
        public string Category { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int CustomerId { get; set; }
        public string Cabinet { get; set; }
    }
}