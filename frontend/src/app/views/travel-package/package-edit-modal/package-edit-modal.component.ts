import { NotificationsService } from './../../../services/notifications.service';
import { PackageService } from './../../../services/package.service';
import { HotelService } from './../../../services/hotel.service';
import { Hotel } from './../../../models/hotel-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-package-edit-modal',
  templateUrl: './package-edit-modal.component.html',
  styleUrls: ['./package-edit-modal.component.css']
})
export class PackageEditModalComponent implements OnInit {

  hotels: Hotel[] = [];
  constructor(
    private matDialog: MatDialog,
    private hotelService: HotelService,
    private packageService: PackageService,
    private notificationService: NotificationsService
  ) { }

  packageForm = new FormGroup({
    code: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    hotel: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    flightNo: new FormControl('', Validators.required),
    transportation: new FormControl('', Validators.required),
    discountAmnt: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data; 
    })
  }

  onSubmit() {
    this.packageService.create(this.packageForm.value).subscribe(data => {
      this.notificationService.showNotification('top', 'right', `Package has been added successfully to travefy system`);
    }, error => {
      this.notificationService.showNotification('top', 'right', 'The system encounter a error with adding the package. Please try again later');
    });
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
