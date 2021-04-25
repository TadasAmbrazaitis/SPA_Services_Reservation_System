using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Services_Reservation_System.Back_End.Models
{
    [Table("SpaSpecialist")]
    public class SpaSpecialist
    {
        [Key]
        public int SpaSpecialistId { get; set; }
        public string EmailAddress { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Categories { get; set; }
        public virtual ICollection<ReservationSpaService> ReservationSpaServices { get; set; }
    }
}