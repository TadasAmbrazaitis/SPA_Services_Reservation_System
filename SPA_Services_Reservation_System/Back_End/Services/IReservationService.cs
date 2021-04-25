using SPA_Services_Reservation_System.Back_End.Models;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public interface IReservationService
    {
        void CreateReservation(Reservation reservationInput, out bool error);
        void Pay(int id, double totalAmount);
        void Cancel(int id);
    }
}