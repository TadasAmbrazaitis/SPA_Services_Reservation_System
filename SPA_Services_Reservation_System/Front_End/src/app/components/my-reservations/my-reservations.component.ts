import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from "../../models/reservation";

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  customer: Customer;
  reservations: Reservation[] = [];
  visibleLoader = false;

  constructor(private _customerService: CustomerService, private router: Router, private toastrService: ToastrService) {
    this.customer = JSON.parse(localStorage.getItem('customer'))
   }

  ngOnInit() {
    this.getMyReservations();
  }

  getMyReservations() {
    this.visibleLoader = true;
    this._customerService.getCustomerReservations(this.customer.customerId).subscribe(
      (reservations) => {
        this.visibleLoader = false;
        this.reservations = reservations;
      }
    )
  }

  pay(id, amount) {
    this.visibleLoader = true;
    this._customerService.payForReservation(id, amount).subscribe(
      (data) => {
        this.visibleLoader = false;
        this.toastrService.success("Sėkmingai apmokėta!");
      },
      (error) => {
        this.visibleLoader = false;
        this.toastrService.error(error.error);
      }
    )
    setTimeout(() => {
      this.getMyReservations();
    }
      , 3000);
  }

  cancel(id) {
    this.visibleLoader = true;
    this._customerService.cancelReservation(id).subscribe(
      (data) => {
        this.visibleLoader = false;
        this.toastrService.warning("Rezervacija atšaukta!");
      },
      (error) => {
        this.visibleLoader = false;
        this.toastrService.error(error.error);
      }
    )
    setTimeout(() => {
        this.getMyReservations();
      }
      , 3000);
  }
}
