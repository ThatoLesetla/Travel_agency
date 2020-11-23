import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { Hotel } from '../models/hotel-interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }


  // Create Package
  create(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${environment.url}/hotels`, hotel, httpOptions);
  }

  // Get Packages
  findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.url}/hotels`);
  }


  findOne(hotelID: any): Observable<Hotel> {
    return this.http.get<Hotel>(`${environment.url}/hotels/${hotelID}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.url}/hotels/${id}`);
  }

  update(hotel: Hotel) {
    return this.http.put(`${environment.url}/hotels/${hotel.hotelID}`, hotel);
  }
}
