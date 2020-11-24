import { CountryService } from './../../services/country.service';
import { CarService } from '../../services/car.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../services/notifications.service';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel-interface';
import { Car } from '../../models/car-interface';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  hotels: Hotel[] = [];
  cars: Car[] = [];

  constructor(
    private dialog: MatDialog,
    private hotelService: HotelService,
    private notifications: NotificationsService,
    private carService: CarService
    ) { }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });

    this.carService.findAll().subscribe(data => {
      this.cars = data;
    })
  }

  addHotel(hotelID: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '400px',
      data: { 
        hotelID: hotelID
       },
    });

    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }

  updateHotel(id: any) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '400px',
      data: { 
        hotelID: id,
        isUpdate: true
      }
    })
  }

  removeHotel(id: any) {
    this.hotelService.delete(id).subscribe(data => {
      this.notifications.showNotification('top', 'right', `The hotel has been successfully removed from the database`);
      const index = this.hotels.indexOf(id, 0);

      this.hotels.splice(index);
    }, error => {
      this.notifications.showNotification('top', 'right', 'A error occured. Please try again later');
    })
  }

  addCar(): void {
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }

  updateCarDetails(regNo: number) {
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: '400px',
      data: {
        carRegNo: regNo,
        isUpdate: true
      }
    });
  }

  deleteVehicle(regNo: any) {
    this.carService.delete(regNo).subscribe(data => {
    const index = this.cars.indexOf(regNo, 0);

    this.cars.splice(index);
    this.notifications.showNotification(
     'top',
    'right',
    'Car successfully deleted from Travefy portal'
    );
   }, erro => {
     this.notifications.showNotification('top', 'right', 'There was a error removing car. Please try again later');
   });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit  {
  public hotelID: string;
  private isUpdate = true;
  public hotel: Hotel;
  public countries: any;
  public selectedCountry: string = 'South Africa';

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private router: Router,
    private hotelService: HotelService,
    private notifications: NotificationsService,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.countries = this.countryService.findAll().subscribe(data => {
      this.countries = data;
      
    });

    if (this.dialogData.isUpdate == true) {
      this.isUpdate = false;

      this.hotelService.findOne(this.dialogData.hotelID).subscribe(data => {
        this.hotel = data;
        console.log(this.hotel);
      });
    } else {
      this.isUpdate = true;
    }
  }

  hotelGroup = new FormGroup({
    hotelName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    country: new FormControl(this.selectedCountry),
    city: new FormControl(''),
    pricePerNight: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  get address() {
    return this.hotelGroup.get('address');
  }

  get hotelName() {
    return this.hotelGroup.get('hotelName');
  }

  get pricePerNight() {
    return this.hotelGroup.get('pricePerNight');
  }

  get phone() {
    return this.hotelGroup.get('phone');
  }

  get email() {
    return this.hotelGroup.get('email');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.hotel = this.hotelGroup.value;
    this.hotel.country = this.selectedCountry;
    this.hotelService.create(this.hotelGroup.value).subscribe(data => {
      this.notifications.showNotification('top', 'right', 'Hotel added successfully to travefy database');
      this.onCancel();
    }, error => {
      this.notifications.showNotification('top', 'right', 'There was a error with adding hotel. Please try again later');
      this.onCancel();
    })
  }

  onUpdate() {
    this.hotelService.update(this.hotel).subscribe(data => {
      this.notifications.showNotification('top', 'right', 'Hotel updated successfully on travefy database');
      this.onCancel();
      this.router.navigate(['/dashboard']);
    }, error => {
      this.notifications.showNotification('top', 'right', 'There was a error with updating hotel. Please try again later');
      this.onCancel();
    })
  }
}

@Component({
  selector: 'app-CarDialogComponent',
  templateUrl: './carDialogComponent.html',
})
export class CarDialogComponent implements OnInit {
  public carID: string;
  public isUpdate = true;
  private car: Car;

  constructor(
    public dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private router: Router,
    private carService: CarService,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {
    if (this.dialogData.isUpdate == true) {
      this.isUpdate = false;

      this.carService.findOne(this.dialogData.carRegNo).subscribe(data => {
        this.car = data;
      });

    } else {
      this.isUpdate = true;
    }
  }
  carForm = new FormGroup({
    plateNumber: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    colour: new FormControl('', Validators.required)
  })


  get plateNumber() {
    return this.carForm.get('plateNumber');
  }

  get brand() {
    return this.carForm.get('brand');
  }

  get year() {
    return this.carForm.get('year');
  }

  get model() {
    return this.carForm.get('model')
  }

  get colour() {
    return this.carForm.get('colour');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
   this.carService.create(this.carForm.value).subscribe(data => {
     this.notifications.showNotification('top', 'right', 'Car added successfully to travefy portal');
     this.router.navigate(['/dashboard']);
     this.onCancel();
   }, error => {
     this.notifications.showNotification('top', 'right', 'There was a error with adding car. Please try again later');
     this.onCancel();
   })
  }

  onUpdate() {
    this.carService.update(this.car).subscribe(data => {
      this.notifications.showNotification('top', 'right', 'Car details update successfully on travefy portal');
      this.onCancel();
      this.router.navigate(['/dashboard']);
    }, error => {
      this.notifications.showNotification('top', 'right', 'There was a error with updating car details. Please try again later');
     this.onCancel();
    })
  }
}

