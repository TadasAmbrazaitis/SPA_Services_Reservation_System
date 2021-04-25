import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FilterPipe } from './filterPipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SpaSpecialistsComponent } from './components/spa-specialists/spa-specialists.component';
import { MyReservationsComponent } from './components/my-reservations/my-reservations.component';
import { BasketComponent } from './components/basket/basket.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarNativeDateFormatter, DateFormatterParams } from 'angular-calendar';
import { AppConfig } from './app-config';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

class CustomDateFormatter extends CalendarNativeDateFormatter {
  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpaSpecialistsComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent,
    ScheduleComponent,
    MyReservationsComponent,
    BasketComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NguiDatetimePickerModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-full-width",
      preventDuplicates: true,
      enableHtml: true
    }),
    ToastContainerModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter
        }
      }),
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
