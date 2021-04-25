using SPA_Services_Reservation_System.Back_End.ViewModels;
using System.Collections.Generic;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public interface ISpaSpecialistService
    {
        List<SpaSpecialistViewModel> GetListOfSpaSpecialists();
    }
}