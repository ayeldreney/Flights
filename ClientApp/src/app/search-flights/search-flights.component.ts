import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FlightRm } from '../api/models';
import { FlightService } from '../api/services/flight.service';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})




export class SearchFlightsComponent implements OnInit {


  searchResult: FlightRm[] = [];


  constructor(private flightService: FlightService) {
    
  }

  

  ngOnInit(): void {
   
    }

  search() {
    this.flightService.searchFlight({}).subscribe(responce => this.searchResult = responce, this.handleError, () => {
      console.log("search completed")
    });

  

  }




  private handleError = (err: any) => {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }




}
