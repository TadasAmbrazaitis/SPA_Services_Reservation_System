using SPA_Services_Reservation_System.Back_End.Models;
using System.Collections.Generic;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public interface ISpaServiceService
    {
        List<SpaService> GetListOfSpaServices();
    }
}