import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FlightService } from '../api/services';
import { FlightRm } from '../api/models/flight-rm';


@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [FlightService]
})


  @Injectable(
    { providedIn: 'root' }
  )


 


export class BookFlightComponent implements OnInit {


  




  constructor(private route: ActivatedRoute,
    private router: Router
    , private flightService: FlightService) { }
    ngOnInit(): void {
      this.route.paramMap.subscribe(p => {
        console.log(this.flightId)

        this.findFlight(p.get("flightId"))



      })
  

    }



  flightId: string = "not loaded";
  flight: FlightRm = {};



  


  private findFlight = (flightId: string | null) => {
   
    this.flightId = flightId ?? "not passed";

    this.flightService.findFlight({ id: this.flightId }).subscribe(flight => this.flight = flight, this.handleError);


  }


  private handleError = (err: any) => {
   
    
      alert("Flight Not found!")
      this.router.navigate(['/search-flights'])
  


  }







}
