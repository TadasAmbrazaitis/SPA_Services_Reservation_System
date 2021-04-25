using SPA_Services_Reservation_System.Back_End.Models;
using System.Collections.Generic;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public interface ICustomerService
    {
        Customer Authenticate(string email, string password);
        List<Reservation> GetCustomerReservations(int customerId);
        Customer Register(Customer customer, string password);
    }
}