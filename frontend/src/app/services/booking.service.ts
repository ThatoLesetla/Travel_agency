import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking-interfact';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private http: HttpClient) { }

  create(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${environment.url}/bookings`, booking);
  }

  // Get:
  findAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${environment.url}/Bookings`);
  }

  findOne(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${environment.url}/booking/${id}`);
  }

  // Delete Booking
  delete(id: number) {
    return this.http.delete(`${environment.url}/booking/${id}`);
  }

  update(booking: Booking) {
    return this.http.put(`${environment.url}/Bookings/${booking.bookingID}`, booking);
  }

}
