import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient, private _appConfig: AppConfig) { }

  register(customer: Customer) {
    return this._http.post(this._appConfig.apiUrl + '/api/customer/register', customer);
  }

  getCustomerReservations(customerId: number) {
    return this._http.get<any[]>(this._appConfig.apiUrl + '/api/Customer/GetCustomerReservations/' + customerId);
  }

  getCustomerReservationSpaServices(spaServiceIds: string) {
    return this._http.get<any[]>(this._appConfig.apiUrl + '/api/Customer/GetCustomerReservationSpaServices/' + spaServiceIds);
  }

  payForReservation(reservationId: number, totalAmount: number) {
    return this._http.post<any>(this._appConfig.apiUrl + '/api/Reservation/PayForReservation', { reservationId, totalAmount });
  }

  cancelReservation(reservationId: number) {
    return this._http.post<any>(this._appConfig.apiUrl + '/api/Reservation/CancelReservation', { reservationId });
  }
}
