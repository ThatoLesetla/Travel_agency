import { Component, OnInit } from '@angular/core';
import { BookingService} from '../../services/booking.service';
import { Booking } from '../../models/booking-interfact';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingService.findAll().subscribe(data => {
      this.bookings = data;
    }, error => {
      alert('Oops... There is a error retrieving your bookings please try again later');
    })
  }



}
