import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PackageService } from '../../services/package.service';
import { Component, OnInit } from '@angular/core';
import { Package } from '../../models/package';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  packages: Package[] = [];

  constructor(
    private packageService: PackageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.packageService.findAll().subscribe(data => {
      this.packages = data;
    })
  }

  book() {
    const dialogRef = this.dialog.open(BookingComponent, {
      width: '500px'
    })
  }

}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingComponent>
  ) {}

  bookingForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    adults: new FormControl('', Validators.required),
    children: new FormControl('', Validators.required),
    rooms: new FormControl('', Validators.required)
  });

  onSubmit() {

  }
  
  get children() {
    return this.bookingForm.get('children');
  }

  get adults() {
    return this.bookingForm.get('adults');
  }
  get startDate() {
    return this.bookingForm.get('startDate');
  }

  get endDate() {
    return this.bookingForm.get('endDate');
  }
}
