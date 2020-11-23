import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public listedAirports: any;
  public flights: any;
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.findAllFlights().subscribe(data => {
      this.flights = data;
    })
  }

  onSearch() {

  }

}
