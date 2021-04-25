import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { Reservation } from "../../models/reservation";
import { Subject } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localeLT from '@angular/common/locales/lt';
import { SpaSpecialistService } from "../../services/spaSpecialist.service";
import { SpaSpecialist } from "../../models/spaSpecialist";

registerLocaleData(localeLT);

interface ReservationServiceEvent extends CalendarEvent {
  spaSpecialistFirstName: string;
  spaSpecialistLastName: string;
  cabinet: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})

export class ScheduleComponent implements OnInit {
  refresh: Subject<any> = new Subject();
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  events: ReservationServiceEvent[] = [];
  event: ReservationServiceEvent;
  eventHoursStart;
  eventHoursEnd;
  eventMinutesStart;
  eventMinutesEnd;
  dayStartHour = 8;
  dayEndHour = 18;
  customer: Customer;
  reservations: Reservation[] = [];
  visibleLoader = false;
  locale: string = "lt";
  startWeek: number = 1;
  spaSpecialists: SpaSpecialist[] = [];
  showModal: boolean;

  constructor(private _customerService: CustomerService, private _spaSpecialistService: SpaSpecialistService) {
    this.customer = JSON.parse(localStorage.getItem('customer'))
   }

  ngOnInit() {
    this.events = [];
    this.visibleLoader = true;
    this.getSpaSpecialists();
    this.refresh.next();
  }

  getSpaSpecialists() {
    this._spaSpecialistService.getSpaSpecialists().subscribe(
      (spaSpecialists: SpaSpecialist[]) => {
        this.spaSpecialists = spaSpecialists;
        this.getMyReservations();
      })
  }

  getMyReservations() {
    this._customerService.getCustomerReservations(this.customer.customerId).subscribe(
      (reservations) => {
        this.events = [];
        this.reservations = reservations;
        for (let reservation of reservations) {
          for (let spaService of reservation.reservationSpaServices) {
            var SpaSpecialist = this.spaSpecialists.find(x => x.spaSpecialistId === spaService.spaSpecialistId);
            var SpaSpecialistFirstName = SpaSpecialist.firstName;
            var SpaSpecialistLastName = SpaSpecialist.lastName;
            this.events.push({
              title: spaService.title, start: new Date(spaService.start), end: new Date(spaService.end),
              spaSpecialistFirstName: SpaSpecialistFirstName, spaSpecialistLastName: SpaSpecialistLastName, cabinet: spaService.cabinet
            });
          }
        }
        this.visibleLoader = false;
      }
    )
  }

  eventClicked({ event }: { event: ReservationServiceEvent }): void {
    this.event = event;
    this.showModal = true;
    this.eventHoursStart = String(this.event.start.getHours()).padStart(2, "0");
    this.eventHoursEnd = String(this.event.end.getHours()).padStart(2, "0");
    this.eventMinutesStart = String(this.event.start.getMinutes()).padStart(2, "0");
    this.eventMinutesEnd = String(this.event.end.getMinutes()).padStart(2, "0");
  }

  hide() {
    this.showModal = false;
  }
}
