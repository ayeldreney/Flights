using Flights.ReadModels;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Flights.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class FlightController : ControllerBase
	{

		private readonly ILogger<FlightController> _logger;

		public FlightController(ILogger<FlightController> logger)
		{
			_logger = logger;
		}

		static Random random = new Random();

		static private IEnumerable<FlightRm> Flights = new FlightRm[] {
	   new (   Guid.NewGuid(),
				"American Airlines",
				random.Next(90, 5000).ToString(),
				new TimePlace("Los Angeles",DateTime.Now.AddHours(random.Next(1, 3))),
				new TimePlace("Istanbul",DateTime.Now.AddHours(random.Next(4, 10))),
					2),
		new (   Guid.NewGuid(),
				"Deutsche BA",
				random.Next(90, 5000).ToString(),
				new TimePlace("Munchen",DateTime.Now.AddHours(random.Next(1, 10))),
				new TimePlace("Schiphol",DateTime.Now.AddHours(random.Next(4, 15))),
				random.Next(1, 853)),
		new (   Guid.NewGuid(),
				"British Airways",
				random.Next(90, 5000).ToString(),
				new TimePlace("London, England",DateTime.Now.AddHours(random.Next(1, 15))),
				new TimePlace("Vizzola-Ticino",DateTime.Now.AddHours(random.Next(4, 18))),
					random.Next(1, 853)),
		new (   Guid.NewGuid(),
			"Basiq Air",
				random.Next(90, 5000).ToString(),
				new TimePlace("Amsterdam",DateTime.Now.AddHours(random.Next(1, 21))),
				new TimePlace("Glasgow, Scotland",DateTime.Now.AddHours(random.Next(4, 21))),
					random.Next(1, 853)),
		new (   Guid.NewGuid(),
				"BB Heliag",
				random.Next(90, 5000).ToString(),
				new TimePlace("Zurich",DateTime.Now.AddHours(random.Next(1, 23))),
				new TimePlace("Baku",DateTime.Now.AddHours(random.Next(4, 25))),
					random.Next(1, 853)),
		new (   Guid.NewGuid(),
				"Adria Airways",
				random.Next(90, 5000).ToString(),
				new TimePlace("Ljubljana",DateTime.Now.AddHours(random.Next(1, 15))),
				new TimePlace("Warsaw",DateTime.Now.AddHours(random.Next(4, 19))),
					random.Next(1, 853)),
		new (   Guid.NewGuid(),
				"ABA Air",
				random.Next(90, 5000).ToString(),
				new TimePlace("Praha Ruzyne",DateTime.Now.AddHours(random.Next(1, 55))),
				new TimePlace("Paris",DateTime.Now.AddHours(random.Next(4, 58))),
					random.Next(1, 853)),
		new (   Guid.NewGuid(),
				"AB Corporate Aviation",
				random.Next(90, 5000).ToString(),
				new TimePlace("Le Bourget",DateTime.Now.AddHours(random.Next(1, 58))),
				new TimePlace("Zagreb",DateTime.Now.AddHours(random.Next(4, 60))),
					random.Next(1, 853))

		};




		[HttpGet]
		[ProducesResponseType(400)]
		[ProducesResponseType(500)]
		[ProducesResponseType(typeof(IEnumerable<FlightRm>),200)]
		public IEnumerable<FlightRm> Search() => Flights;

		[ProducesResponseType(StatusCodes.Status404NotFound)]
		[ProducesResponseType(400)]
		[ProducesResponseType(500)]
		[ProducesResponseType(typeof(FlightRm), 200)]
		[HttpGet("{id}")]
		public ActionResult<FlightRm> Find(Guid id) {

			var flight = Flights.SingleOrDefault(x => x.Id == id);

			if (flight == null) { 
			
			return NotFound();	
			}

			 return Ok(flight);		


		}


	}

}