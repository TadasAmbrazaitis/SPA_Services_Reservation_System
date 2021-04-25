import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private cartArray: any[] = JSON.parse(sessionStorage.getItem("cartItems"));
  private cartArraySet = new Set();

  addToCartArray(productArray: any): void {
    this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
    if (this.cartArray == null) {
      this.cartArray = Object.values(productArray);
    }
    this.cartArray = Object.values(this.cartArray);
    this.cartArray.push(JSON.stringify(productArray));
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartArray));
    this.cartArraySet = new Set(this.cartArray);
  }
  removeFromCartArray(id: any): void {
    this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
    this.cartArray = Object.values(this.cartArray);
    this.cartArray.splice(id, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartArray));
    this.cartArraySet = new Set(this.cartArray);
  }

  getCartCount() {
    if (sessionStorage.getItem("cartItems") == null) {
      return 0;
    }
    return JSON.parse(sessionStorage.getItem("cartItems")).length;
  }
  getCartItems() {
    this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
    this.cartArraySet = new Set(this.cartArray);
    return this.cartArraySet;
  }

  createReservation(reservation: Reservation) {
    console.log(reservation);
    return this._http.post(this._appConfig.apiUrl + '/api/Reservation/CreateReservation', reservation);
  }

  constructor(private _http: HttpClient, private _appConfig: AppConfig) { }
}
