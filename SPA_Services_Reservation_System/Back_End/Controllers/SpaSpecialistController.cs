using Microsoft.AspNetCore.Mvc;
using SPA_Services_Reservation_System.Back_End.Services;
using System;

namespace SPA_Services_Reservation_System.Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpaSpecialistController : ControllerBase
    {
        private readonly ISpaSpecialistService _spaSpecialistService;
        public SpaSpecialistController(ISpaSpecialistService spaSpecialistService)
        {
            _spaSpecialistService = spaSpecialistService;
        }

        [HttpGet("[action]")]
        public IActionResult GetSpaSpecialists()
        {
            try
            {
                var spaSpecialists = _spaSpecialistService.GetListOfSpaSpecialists();
                return Ok(spaSpecialists);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}