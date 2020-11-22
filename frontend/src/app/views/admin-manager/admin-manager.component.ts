import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../services/notifications.service';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel-interface';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  hotelID: number
}

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(
    private dialog: MatDialog,
    private hotelService: HotelService,
    private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }

  addHotel(hotelID: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '400px',
      data: { hotelID: hotelID },
    });

    dialogRef.afterClosed().subscribe((result) => {
      
    });
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

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent  {
  public hotelID: string;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private router: Router,
    private hotelService: HotelService,
    private notifications: NotificationsService

  ) {}

  hotelGroup = new FormGroup({
    address: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    pricePerNight: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  get address() {
    return this.hotelGroup.get('address');
  }

  get currency() {
    return this.hotelGroup.get('currency');
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
   this.hotelService.create(this.hotelGroup.value).subscribe(data => {
     this.notifications.showNotification('top', 'right', 'Hotel added successfully to travefy database');
     this.onCancel();
   }, error => {
     this.notifications.showNotification('top', 'right', 'There was a error with adding hotel. Please try again later');
     this.onCancel();
   })
  }

  onDelete() {
    this.hotelService.delete(this.dialogData.hotelID).subscribe(data => {
     this.notifications.showNotification(
       'top',
       'right',
       'Client account successfully deleted'
     );
     this.dialogRef.close(); // close dialog
     this.router.navigate(['/dashboard']);
    });
  }


}
