using Microsoft.AspNetCore.Mvc;
using SPA_Services_Reservation_System.Back_End.Services;
using System;

namespace SPA_Services_Reservation_System.Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpaServiceController : ControllerBase
    {
        private readonly ISpaServiceService _spaServiceService;
        public SpaServiceController(ISpaServiceService spaServiceService)
        {
            _spaServiceService = spaServiceService;
        }

        [HttpGet("[action]")]
        public IActionResult GetSpaServices()
        {
            try
            {
                var spaServices = _spaServiceService.GetListOfSpaServices();
                return Ok(spaServices);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}