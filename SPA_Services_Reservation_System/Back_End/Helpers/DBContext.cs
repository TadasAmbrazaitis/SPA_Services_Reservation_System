using Microsoft.EntityFrameworkCore;
using SPA_Services_Reservation_System.Back_End.Models;

namespace SPA_Services_Reservation_System.Back_End.Helpers
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<SpaService> SpaServices { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<SpaSpecialist> SpaSpecialists { get; set; }
        public DbSet<ReservationSpaService> ReservationSpaServices { get; set; }
    }
}