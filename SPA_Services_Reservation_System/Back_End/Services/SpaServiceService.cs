using SPA_Services_Reservation_System.Back_End.Helpers;
using SPA_Services_Reservation_System.Back_End.Models;
using System.Collections.Generic;
using System.Linq;

namespace SPA_Services_Reservation_System.Back_End.Services
{
    public class SpaServiceService : ISpaServiceService
    {

        private readonly DBContext _dbContext;

        public SpaServiceService(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<SpaService> GetListOfSpaServices()
        {
            var listOfSpaServices = (from s in _dbContext.SpaServices
                                select new SpaService
                                {
                                    SpaServiceId = s.SpaServiceId,
                                    Title = s.Title,
                                    Category = s.Category,
                                    DurationMinutes = s.DurationMinutes,
                                    Price = s.Price,
                                    Description = s.Description
                                }).ToList();

            return listOfSpaServices;
        }
    }
}