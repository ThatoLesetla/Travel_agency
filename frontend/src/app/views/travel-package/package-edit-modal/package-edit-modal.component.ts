import { FlightService } from './../../../services/flight.service';
import { CarService } from './../../../services/car.service';
import { NotificationsService } from './../../../services/notifications.service';
import { PackageService } from './../../../services/package.service';
import { HotelService } from './../../../services/hotel.service';
import { Hotel } from './../../../models/hotel-interface';
import { Car } from './../../../models/car-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Package } from '../../../models/package';


@Component({
  selector: 'app-package-edit-modal',
  templateUrl: './package-edit-modal.component.html',
  styleUrls: ['./package-edit-modal.component.css']
})
export class PackageEditModalComponent implements OnInit {

  hotels: Hotel[] = [];
  cars: Car[] = [];
  flightCodes: any;
  package_price: string = 'R0.00';
  selectedHotel: any;
  selectedFlight: string;
  package: Package;

  constructor(
    private matDialog: MatDialog,
    private hotelService: HotelService,
    private packageService: PackageService,
    private notificationService: NotificationsService,
    private carService: CarService,
    private flightService: FlightService
  ) { }

  selectedOption: string;
  printedOption: string;

  options = [{ name: "option1", value: 1 }, { name: "option2", value: 2 }];

  packageForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    hotel: new FormControl(''),
    duration: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    flightNo: new FormControl(''),
    transportation: new FormControl(''),
    discountAmnt: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data; 
    });

    this.carService.findAll().subscribe(data => {
      this.cars = data;
    })

    this.flightService.findAllFlights().subscribe(data => {
      this.flightCodes = data;
    })
  }

  onSubmit() {
    debugger;
    this.package = this.packageForm.value;
    this.package.flightCode = this.selectedFlight;
    this.package.hotelID = this.selectedHotel;
    this.packageService.create(this.packageForm.value).subscribe(data => {
      this.matDialog.closeAll();
      this.notificationService.showNotification('top', 'right', `Package has been added successfully to travefy system`);
    }, error => {
      this.notificationService.showNotification('top', 'right', 'The system encounter a error with adding the package. Please try again later');
    });
  }

  selectHotel(hotel: any) {
    this.selectedHotel = hotel;
  }

  selectFlight(flight: any) {
    this.selectedFlight = flight;
  }

  onCancel() {
    this.matDialog.closeAll();
  }

  get code() {
    return this.packageForm.get('code');
  }

  get title() {
    return this.packageForm.get('title');
  }

  get description() {
    return this.packageForm.get('description');
  }

  get hotel() {
    return this.packageForm.get('hotel');
  }

  get duration() {
    return this.packageForm.get('duration');
  }

  get price() {
    return this.packageForm.get('price');
  }

  get flightNo() {
    return this.packageForm.get('flightNo');
  }

  get transportation() {
    return this.packageForm.get('transportation');
  }

  get discountAmnt() {
    return this.packageForm.get('discountAmnt');
  }

}
