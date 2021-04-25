import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { SpaService } from 'src/app/models/spaService';
import { SpaServiceService } from 'src/app/services/spaService.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  formFieldControl1: FormControl = new FormControl('');
  formFieldControl2: FormControl = new FormControl('');
  formFieldControl3: FormControl = new FormControl('');
  formFieldControl4: FormControl = new FormControl('');

  customer: Customer;
  spaServices: SpaService[] = [];
  cartItems;
  cartItemsFinal: SpaService[] = [];
  start: Date;
  end: Date;
  currentDate = new Date();
  reservation: any = {};
  paymentMethod;
  timePreference;
  visibleLoader = true;

  constructor(private _spaServiceService: SpaServiceService, private _customerService: CustomerService, private router: Router, private basketService: BasketService, private toastrService: ToastrService)
  {
    this.customer = JSON.parse(localStorage.getItem('customer'))
  }

  ngOnInit() {
    this.cartItems = (Array.from(this.basketService.getCartItems())).map(Number);
    this.getSpaServices();
  }

  getSpaServices() {
    this._spaServiceService.getSpaServices().subscribe(
      (spaServices: SpaService[]) => {
        this.cartItemsFinal = spaServices.filter((spaService) => this.cartItems.includes(spaService.spaServiceId));
        this.visibleLoader = false;
      })
  }

  getTotalAmount() {
    if (this.cartItemsFinal) {
      return this.cartItemsFinal.map(t => t.price).reduce((a, value) => a + value, 0);
    }
    return 0;
  }

  removeItem(id) {
    this.basketService.removeFromCartArray(id);
    this.cartItems = (Array.from(this.basketService.getCartItems())).map(Number);
    this.getSpaServices();
  }

  reserve() {
    this.formFieldControl1.markAsTouched();
    this.formFieldControl2.markAsTouched();
    this.formFieldControl3.markAsTouched();
    this.formFieldControl4.markAsTouched();

    if (this.start > this.end) {
      this.toastrService.error("Išvykimo data negali būti ankstesnė nei atvykimo data!");
      return;
    }
    if (this.start.getDate() === this.currentDate.getDate() || this.end.getDate() === this.currentDate.getDate()) {
      this.toastrService.error("Paslaugų negalima rezervuoti tą pačią dieną!");
      return;
    }
    if (this.start < this.currentDate || this.end < this.currentDate) {
      this.toastrService.error("Paslaugų negalima rezervuoti atgaline data!");
      return;
    }

    this.visibleLoader = true;

    this.reservation.Start = this.start.toISOString();
    this.reservation.End = this.end.toISOString();
    this.reservation.TotalAmount = this.getTotalAmount();
    this.reservation.CustomerId = this.customer.customerId;
    this.reservation.SpaServiceIds = this.cartItems.toString();
    this.reservation.PaymentMethod = this.paymentMethod;
    this.reservation.Status = "Neapmokėta";
    this.reservation.TimePreference = this.timePreference;

    this.basketService.createReservation(this.reservation).subscribe(
      (data) => {
        this.toastrService.success("Rezervacija atlikta!");
        sessionStorage.clear();
        this.visibleLoader = false;
        this.router.navigate(['/my-reservations'])
      },
      (error) => {
        this.toastrService.error("Rezervacijos atlikti šiam laikotarpiui nepavyko, pabandykite atsisakyti paslaugų arba pakeisti laikotarpį!");
        this.visibleLoader = false;
      }
    )

    setTimeout(() => {
      
    }
      , 50000);
  }
}
