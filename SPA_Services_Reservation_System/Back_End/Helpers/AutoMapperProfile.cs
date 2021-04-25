using AutoMapper;
using SPA_Services_Reservation_System.Back_End.Models;
using SPA_Services_Reservation_System.Back_End.ViewModels;

namespace SPA_Services_Reservation_System.Back_End.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CustomerViewModel, Customer>();

            CreateMap<SpaSpecialistViewModel, SpaSpecialist>();
        }
    }
}