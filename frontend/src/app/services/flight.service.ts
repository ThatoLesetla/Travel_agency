import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  airports = new BehaviorSubject<any>([]);
  listedAirports = this.airports.asObservable();

  constructor(private http: HttpClient) { }

  // Get flights from 12pm to 1pm on Jan 29 2018:
  findAllFlights(): Observable<any> {
    return this.http.get<any>('https://tlesetla:34Tg02Ymsr@@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800');
  }
}
