using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SPA_Services_Reservation_System.Back_End.Models;
using SPA_Services_Reservation_System.Back_End.Services;
using SPA_Services_Reservation_System.Back_End.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SPA_Services_Reservation_System.Back_End.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;
        public IConfiguration _configuration;
        public CustomerController(ICustomerService customerService, IMapper mapper, IConfiguration configuration)
        {
            _customerService = customerService;
            _mapper = mapper;
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Register([FromBody] CustomerViewModel customerViewModel)
        {
            var customer = _mapper.Map<Customer>(customerViewModel);

            try
            {
                _customerService.Register(customer, customerViewModel.Password);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] CustomerViewModel customerViewModel)
        {
            if (customerViewModel == null) return BadRequest();
            var customer = _customerService.Authenticate(customerViewModel.EmailAddress, customerViewModel.Password);

            if (customer == null) return BadRequest("Invalid credentials");
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, customer.CustomerId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(new
            {
                customer.CustomerId,
                customer.EmailAddress,
                customer.FirstName,
                customer.LastName,
                customer.PhoneNumber,
                customer.PersonalId,
                Token = tokenString
            });
        }

        [AllowAnonymous]
        [HttpGet("{customerId:int}")]
        public IActionResult GetCustomerReservations(int customerId)
        {
            try
            {
                var reservations = _customerService.GetCustomerReservations(customerId);
                return Ok(reservations);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}