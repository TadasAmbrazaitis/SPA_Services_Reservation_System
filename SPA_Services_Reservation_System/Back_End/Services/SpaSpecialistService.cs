using SPA_Services_Reservation_System.Back_End.Helpers;
using SPA_Services_Reservation_System.Back_End.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public class SpaSpecialistService : ISpaSpecialistService
    {

        private readonly DBContext _dbContext;

        public SpaSpecialistService(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<SpaSpecialistViewModel> GetListOfSpaSpecialists()
        {
            var listOfSpaSpecialists = (from s in _dbContext.SpaSpecialists
                                select new SpaSpecialistViewModel
                                {
                                    SpaSpecialistId = s.SpaSpecialistId,
                                    EmailAddress = s.EmailAddress,
                                    FirstName = s.FirstName,
                                    LastName = s.LastName,
                                    PhoneNumber = s.PhoneNumber,
                                    Categories = s.Categories
                                }).ToList();

            return listOfSpaSpecialists;
        }
    }
}