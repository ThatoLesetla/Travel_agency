import { PackageService } from './../services/package.service';
import { HotelService } from './../services/hotel.service';
import { FlightService } from './../services/flight.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ClientService} from '../services/client.service';
import { Client } from '../models/client-interface';
import { Hotel } from '../models/hotel-interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  flights: any;
  public clients: Client[];
  public hotels: Hotel[] = [];
  public numClients: number;
  public numAirports: number;
  public numHotels: number;
  public numDestinations: number;
  startDate: any;
  endDate: any;

  constructor(private clientService: ClientService,
              private flightservice: FlightService,
              private hotelService: HotelService,
              private packageService: PackageService
              ) { }
  
  ngOnInit() {
  /*===================== GET Airports Start ========================= */
    this.flightservice.findAllFlights().subscribe(data => {
      this.numAirports = data.length;
      this.flights = data;
      console.log(this.flights);
    })
  /*===================== GET Airports End ========================= */
  /*===================== GET Clients ========================= */
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
      this.numClients = data.length;
    })

    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
      this.numHotels = data.length;
    })
    /*===================== GET Clients End ========================= */

    /*===================== GET Packages ========================= */
    this.packageService.findAll().subscribe(data => {
      this.numDestinations = data.length;
    })
    /*===================== GET Packages End ========================= */
  }

  onSearch() {
    this.numAirports = this.numAirports - 58;
    this.numClients = this.numClients - 1;
    this.numDestinations = this.numDestinations -1;
    this.numHotels = this.numHotels - 1;

    if (this.numHotels < 0 || this.numClients < 0 || this.numHotels < 0) {
      this.ngOnInit();
    }
  }
}