
using Microsoft.AspNetCore.Mvc;
using Flights.Dtos;
using Flights.ReadModels;

namespace Flights.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class PassengerController : ControllerBase
	{

		static private IList<NewPassengerDto> Passengers = new List<NewPassengerDto>();

		[HttpPost]
		[ProducesResponseType(201)]
		[ProducesResponseType(400)]
		[ProducesResponseType(500)]

		public IActionResult Register(NewPassengerDto newPassengerDto) {
			System.Diagnostics.Debug.WriteLine(Passengers.Count);
			Passengers.Add(newPassengerDto);
			return CreatedAtAction(nameof(Find),new {email= newPassengerDto.Email } );
		
		}

		[HttpGet("{email}")]
		public ActionResult<PassengerRm> Find(string email) {
			var passenger = Passengers.FirstOrDefault(x => x.Email == email);

			if (passenger is null) { 
			return NotFound();	
			}
			var rm = new PassengerRm(
				passenger.Email,
				passenger.FirstName,
				passenger.LastName,
				passenger.Gender
				);

			return Ok(rm);	
		
	
		}



	}
}
