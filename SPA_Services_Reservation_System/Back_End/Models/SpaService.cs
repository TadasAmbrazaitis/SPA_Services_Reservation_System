using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Services_Reservation_System.Back_End.Models
{
    [Table("SpaService")]
    public class SpaService
    {
        [Key]
        public int SpaServiceId { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public int DurationMinutes { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }
}