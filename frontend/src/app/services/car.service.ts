import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/car-interface';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(`${environment.url}/cars`, car, httpOptions);
  }

  // Get:
  findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.url}/cars`);
  }

  // Delete Car
  delete(regNo: number) {
    return this.http.delete(`${environment.url}/cars/${regNo}`, httpOptions);
  }

  update(car: Car) {
    return this.http.put(`${environment.url}/Cars/${car.regNo}`, car);
  }

}
