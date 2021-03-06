(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"wrapper\">\r\n  <div class=\"container-fluid\"> \r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/basket/basket.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/basket/basket.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bas\">\r\n  <mat-card class=\"text-center\" style=\"background-color: #56B8B9; margin-bottom: 20px;\"><h5 style=\"color: white;\">Mano krep??elis</h5></mat-card>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"visibleLoader\"></mat-progress-bar>\r\n  <div *ngIf=\"!visibleLoader\">\r\n    <table class=\"table\" *ngIf=\"this.cartItemsFinal.length > 0; else emptyBasket\" style=\"background-color:white\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Spa Paslauga</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Trukm??</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Kaina</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let spaService of cartItemsFinal\">\r\n          <td style=\"font-size:14px;\">{{ spaService.title }}</td>\r\n          <td style=\"font-size:14px;\">{{ spaService.durationMinutes }} min.</td>\r\n          <td style=\"font-size:14px;\">{{ spaService.price }}??? </td>\r\n          <td style=\"font-size:14px;\"><button class=\"btn\" (click)=\"removeItem()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button></td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td style=\"font-size: 14px;\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"start\" required [formControl]=\"formFieldControl1\" placeholder=\"Atvykimo data\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker startView=\"month\"></mat-datepicker>\r\n              <mat-error>Privalomas laukelis</mat-error>\r\n            </mat-form-field>\r\n            <br /> <br />\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"picker2\" [(ngModel)]=\"end\" required [formControl]=\"formFieldControl2\" placeholder=\"I??vykimo data\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2 startView=\"month\"></mat-datepicker>\r\n              <mat-error>Privalomas laukelis</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td style=\"font-size: 14px;\">\r\n            <mat-form-field>\r\n              <mat-label>Paslaug?? atlikimo laikas</mat-label>\r\n              <mat-select [(ngModel)]=\"timePreference\" required [formControl]=\"formFieldControl3\">\r\n                <mat-option value=\"Ryte\">Ryte</mat-option>\r\n                <mat-option value=\"Dien??\">Dien??</mat-option>\r\n                <mat-option value=\"Nesvarbu\">Nesvarbu</mat-option>\r\n              </mat-select>\r\n              <mat-error>Privalomas laukelis</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td style=\"font-size: 14px;\">\r\n            <br />\r\n            <b>I?? viso {{getTotalAmount()}}???</b> <br /> <br /> <br />\r\n            <mat-form-field>\r\n              <mat-label>Mok??jimo b??das</mat-label>\r\n              <mat-select [(ngModel)]=\"paymentMethod\" required [formControl]=\"formFieldControl4\">\r\n                <mat-option value=\"Internetu\">Internetu</mat-option>\r\n                <mat-option value=\"Grynais\">Grynais</mat-option>\r\n              </mat-select>\r\n              <mat-error>Privalomas laukelis</mat-error>\r\n            </mat-form-field>\r\n            <br />\r\n          </td>\r\n          <td style=\"font-size: 14px;\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"font-size: 14px;\"></td>\r\n          <td style=\"font-size: 14px;\"></td>\r\n          <td style=\"font-size: 14px;\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"reserve()\" style=\"color: #fff; cursor: pointer;\">Rezervuoti</button></td>\r\n          <td style=\"font-size: 14px;\">\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <ng-template #emptyBasket>\r\n    <mat-card class=\"text-center\" style=\"background-color: #F4BDAE; margin-bottom: 20px;\"><h5 style=\"color: white;\">Dar nepasirinkote nei vienos paslaugos!</h5></mat-card>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/carousel/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"    margin-bottom: 50px; margin-top: 70px;\">\r\n  <div class='col-12'>\r\n    <ngb-carousel style=\"border-radius: 150px; overflow: hidden;\">\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../../assets/img-carousel/carousel1.jpg\" class=\"img-fluid\" style=\" width: 100%; border-radius: 150px;\">\r\n        <div class=\"carousel-caption\">\r\n          <h3 style=\"color: rgb(255, 255, 255)\">Masa??ai</h3>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../../assets/img-carousel/carousel2.jpg\" class=\"img-fluid\" style=\" width: 100%; border-radius: 150px;\">\r\n        <div class=\"carousel-caption\">\r\n          <h3 style=\"color: rgb(255, 255, 255)\">Treniruot??s</h3>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../../assets/img-carousel/carousel3.jpg\" class=\"img-fluid\" style=\" width: 100%; border-radius: 150px;\">\r\n        <div class=\"carousel-caption\">\r\n          <h3 style=\"color: rgb(255, 255, 255)\">Proced??ros</h3>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-carousel>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\r\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\" style=\"padding:20px;\"></nav>\r\n  </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"...\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homepage/homepage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\r\n\r\n<table class=\"table\" style=\"background-color:white\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th style=\"font-size:14px;\" scope=\"col\">\r\n        <mat-form-field>\r\n          <mat-label>Kategorija</mat-label>\r\n          <mat-select [(ngModel)]=\"filterCategory\">\r\n            <mat-option value=\"Visos\">Visos</mat-option>\r\n            <mat-option value=\"K??no Masa??ai\">K??no Masa??ai</mat-option>\r\n            <mat-option value=\"Veido Masa??ai\">Veido Masa??ai</mat-option>\r\n            <mat-option value=\"N??????i??j?? Masa??ai\">N??????i??j?? Masa??ai</mat-option>\r\n            <mat-option value=\"K??no Proced??ros\">K??no Proced??ros</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </th>\r\n      <th style=\"font-size:14px;\" scope=\"col\">\r\n        <mat-form-field>\r\n          <mat-label>Trukm??</mat-label>\r\n          <mat-select [(ngModel)]=\"filterDuration\">\r\n            <mat-option value=999>Visos</mat-option>\r\n            <mat-option value=30>iki 30 min.</mat-option>\r\n            <mat-option value=60>iki 60 min.</mat-option>\r\n            <mat-option value=90>iki 1.5 val.</mat-option>\r\n            <mat-option value=120>iki 2 val.</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </th>\r\n      <th style=\"font-size:14px;\" scope=\"col\">\r\n        <mat-form-field>\r\n          <mat-label>Kaina</mat-label>\r\n          <mat-select [(ngModel)]=\"filterPrice\">\r\n            <mat-option value=999>Visos</mat-option>\r\n            <mat-option value=20>iki 20???</mat-option>\r\n            <mat-option value=40>iki 40???</mat-option>\r\n            <mat-option value=60>iki 60???</mat-option>\r\n            <mat-option value=80>iki 80???</mat-option>\r\n            <mat-option value=100>iki 100???</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </th>\r\n      <th style=\"font-size:14px;\" scope=\"col\"></th>\r\n      <th style=\"font-size:14px;\" scope=\"col\"></th>\r\n    </tr>\r\n  </thead>\r\n </table>\r\n\r\n  <div *ngFor=\"let category of categories\" style=\"margin-bottom:20px;\">\r\n    <mat-card style=\"background-color:#56B8B9\"><h5 style=\"color: white\">{{ category }}</h5></mat-card>\r\n    <mat-accordion class=\"myAccordion\" multi *ngFor=\"let spaService of spaServices | filter:filterPrice:filterCategory:filterDuration\" style=\"margin-bottom:20px;\">\r\n      <mat-expansion-panel *ngIf=\"spaService.category == category\" style=\"margin-bottom:5px;\">\r\n        <mat-expansion-panel-header collapsedHeight=\"80px\" expandedHeight=\"160px\">\r\n          <mat-panel-title>{{ spaService.title }}</mat-panel-title>\r\n          <mat-panel-description>\r\n            <i>{{ spaService.durationMinutes }} min.</i>\r\n            <b>{{ spaService.price }}???</b>\r\n            <button class=\"btn\" (click)=\"addToCart(spaService.spaServiceId); $event.stopPropagation();\"><i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"></i></button>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <p>{{ spaService.description }}</p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n  <div style=\"margin-bottom:20px;\"><br /></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mgTp\">\r\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate class=\"col-md-6 offset-md-3\">\r\n    <mat-card class=\"text-center\" style=\"background-color: #56B8B9; margin-bottom: 20px;\"><h5 style=\"color: white;\">Prisijungimas</h5></mat-card>\r\n    <div class=\"form-group\">\r\n      <div [ngClass]=\"{'has-error': 'f.submitted && emailAddress.valid'}\">\r\n        <label>El. pa??tas</label>\r\n        <input type=\"email\" name=\"emailAddress\" #emailAddress=\"ngModel\" [(ngModel)]=\"model.emailAddress\" required class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"El. pa??tas\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !emailAddress.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div [ngClass]=\"{'has-error': 'f.submitted && password.valid'}\">\r\n        <label>Slapta??odis</label>\r\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Slapta??odis\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !password.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <p><a routerLink=\"/register\">Dar neu??siregistrav??? Registruokit??s</a></p>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary topBtn\"><i class=\"fa fa-sign-in\"></i> Prisijungti </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-reservations/my-reservations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-reservations/my-reservations.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rez\">\r\n  <mat-card class=\"text-center\" style=\"background-color: #56B8B9; margin-bottom: 20px;\"><h5 style=\"color: white;\">Mano rezervacijos</h5></mat-card>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"visibleLoader\"></mat-progress-bar>\r\n  <div *ngIf=\"!visibleLoader\">\r\n    <table class=\"table\" *ngIf=\"this.reservations.length > 0; else no_reservations\" style=\"background-color: white\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Spa paslaugos</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Atvykimas</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">I??vykimas</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Suma</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\">Mok??jimo b??das</th>\r\n          <th style=\"font-size:14px;\" scope=\"col\"></th>\r\n          <th style=\"font-size:14px;\" scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let reservation of reservations\">\r\n          <td style=\"font-size:14px;\">\r\n            <ul style=\"list-style-type:square; margin: 0; padding:20px;\">\r\n              <li *ngFor=\"let spaService of reservation.reservationSpaServices\">{{spaService.title}} <i> {{spaService.durationMinutes}} min.</i></li>\r\n            </ul>\r\n          </td>\r\n          <td style=\"font-size:14px; vertical-align:middle;\">{{ reservation.start | date :'y-MM-dd'}}</td>\r\n          <td style=\"font-size:14px; vertical-align:middle;\">{{ reservation.end | date :'y-MM-dd' }}</td>\r\n          <td style=\"font-size:14px; vertical-align:middle;\">{{ reservation.totalAmount }}???</td>\r\n          <td style=\"font-size:14px; vertical-align:middle;\">{{ reservation.paymentMethod }}</td>\r\n          <td *ngIf=\"reservation.paymentMethod == 'Internetu' && reservation.status == 'Neapmok??ta'\" style=\"font-size:14px; text-align:center; vertical-align:middle;\"><button class=\"btn btn-primary\" (click)=\"pay(reservation.reservationId, reservation.totalAmount)\">Mok??ti</button></td>\r\n          <td *ngIf=\"reservation.paymentMethod == 'Internetu' && reservation.status == 'Apmok??ta'\" style=\"font-size:14px; text-align:center; vertical-align:middle; color:green\"><i class=\"fa fa-check\" aria-hidden=\"true\"> Apmok??ta</i></td>\r\n          <td *ngIf=\"reservation.paymentMethod == 'Grynais'\" class=\"text-center\" style=\"font-size:14px; text-align:center; vertical-align:middle;\"></td>\r\n          <td class=\"text-center\" style=\"font-size:14px; text-align:center; vertical-align:middle;\"><button class=\"btn btn-primary\" style=\"background-color: red; border: none;\" (click)=\"cancel(reservation.reservationId)\">At??aukti rezervacij??</button></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"visibleLoader && reservations?.length > 0\"></mat-progress-bar>\r\n  <ng-template #no_reservations>\r\n    <mat-card class=\"text-center\" style=\"background-color: #F4BDAE; margin-bottom: 20px;\"><h5 style=\"color: white;\">Rezervacij?? n??ra!</h5></mat-card>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" style=\"background-color: #095D79\">\r\n  <div class=\"container\">\r\n    <a href=\"#\" class=\"navbar-left\"><img src=\".../../../assets/img/spalogo.ico\"></a>\r\n    <a class=\"navbar-brand\" routerLink=\"\">SPA Paslaugos</a>\r\n    <a class=\"navbar-brand\" routerLink=\"/spa-specialists\">SPA Specialistai</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <a routerLink=\"/basket\" style=\"cursor: pointer\" class=\"dropdown-item\"><i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"></i></a>\r\n        <li class=\"nav-item dropdown\" *ngIf=\"currentCustomer; else not_loggedin\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Sveiki, {{ currentCustomer.firstName }}\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a routerLink=\"/my-reservations\" style=\"cursor: pointer\" class=\"dropdown-item\">Rezervacijos</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a routerLink=\"/schedule\" style=\"cursor: pointer\" class=\"dropdown-item\">Tvarkara??tis</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor:pointer\">Atsijungti</a>\r\n          </div>\r\n        </li>\r\n        <ng-template #not_loggedin>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/login\">Prisijungti</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/register\">Registruotis</a>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mgTp\">\r\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" class=\"col-md-6 offset-md-3\" novalidate>\r\n    <mat-card class=\"text-center\" style=\"background-color: #56B8B9; margin-bottom: 20px;\"><h5 style=\"color: white;\">Registracija</h5></mat-card>\r\n    <div class=\"form-group\">\r\n      <div>\r\n        <label>Vardas</label>\r\n        <input type=\"text\" name=\"firstName\" #firstName=\"ngModel\" [(ngModel)]=\"model.firstName\" required\r\n               class=\"form-control\" placeholder=\"Vardas\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !firstName.valid\">Privalomas laukelis</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div>\r\n        <label>Pavard??</label>\r\n        <input type=\"text\" name=\"lastName\" #lastName=\"ngModel\" [(ngModel)]=\"model.lastName\" required\r\n               class=\"form-control\" placeholder=\"Pavard??\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !lastName.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div>\r\n        <label>El. pa??tas</label>\r\n        <input type=\"email\" name=\"emailAddress\" #emailAddress=\"ngModel\" [(ngModel)]=\"model.emailAddress\" required class=\"form-control\"\r\n               placeholder=\"El. pa??tas\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !emailAddress.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div>\r\n        <label>Tel. numeris</label>\r\n        <input type=\"text\" name=\"phoneNumber\" #phoneNumber=\"ngModel\" [(ngModel)]=\"model.phoneNumber\" required\r\n               class=\"form-control\" placeholder=\"Tel. numeris\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !phoneNumber.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div>\r\n        <label>Asmens kodas</label>\r\n        <input type=\"text\" name=\"personalId\" #personalId=\"ngModel\" [(ngModel)]=\"model.personalId\" required\r\n               class=\"form-control\" placeholder=\"Asmens kodas\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !personalId.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div [ngClass]=\"{'has-error': 'f.submitted && !password.valid'}\">\r\n        <label>Slapta??odis</label>\r\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required\r\n               class=\"form-control\" placeholder=\"Slapta??odis\">\r\n      </div>\r\n      <div style=\"color: red; text-align: center;\" *ngIf=\"f.submitted && !password.valid\">Privalomas laukelis</div>\r\n\r\n    </div>\r\n\r\n    <p><a routerLink=\"/login\">Jau u??siregistrav??? Prisijunkite</a></p>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary topBtn\"><i class=\"fa fa-sign-in\"></i> Registruotis </button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/schedule/schedule.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/schedule/schedule.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"schedule\">\r\n  <mat-card class=\"text-center\" style=\"background-color: #56B8B9; margin-bottom: 20px;\"><h5 style=\"color: white;\">U??sakyt?? paslaug?? tvarkara??tis</h5></mat-card>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"visibleLoader\"></mat-progress-bar>\r\n  <div *ngIf=\"!visibleLoader\">\r\n    <div class=\"calendar\" *ngIf=\"events?.length > 0; else no_events\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"btn-group\">\r\n            <div class=\"btn btn-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n              Pra??jusi savait??\r\n            </div>\r\n            <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n              ??iandien\r\n            </div>\r\n            <div class=\"btn btn-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n              Kita savait??\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mwl-calendar-week-view [locale]=\"locale\" [refresh]=\"refresh\" (eventClicked)=\"eventClicked($event)\" [weekStartsOn]=\"startWeek\"\r\n                              [viewDate]=\"viewDate\" [events]=\"events\" [dayStartHour]=\"dayStartHour\" [dayEndHour]=\"dayEndHour\">\r\n      </mwl-calendar-week-view>\r\n    </div>\r\n\r\n    <div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">{{event?.title}}</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hide()\">&times;</button>\r\n          </div>\r\n\r\n          <div class=\"modal-body\">\r\n            <div class=\"modal-body\">\r\n              <p>{{eventHoursStart}}:{{eventMinutesStart}} - {{eventHoursEnd}}:{{eventMinutesEnd}}</p>\r\n              <p>{{event.spaSpecialistFirstName}} {{ event.spaSpecialistLastName }}</p>\r\n              <p>{{event.cabinet}}</p>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"hide()\">U??daryti</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #no_events>\r\n  <mat-card class=\"text-center\" style=\"background-color: #F4BDAE; margin-bottom: 20px;\"><h5 style=\"color: white;\">U??sakyt?? paslaug?? n??ra!</h5></mat-card>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/spa-specialists/spa-specialists.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/spa-specialists/spa-specialists.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\r\n\r\n<div class=\"row card-group\">\r\n  <div class=\"col-4 d-flex align-items-stretch\" *ngFor=\"let spaSpecialist of spaSpecialists\" style=\"margin-bottom:20px;\">\r\n    <mat-card style=\"background-color:#56B8B9\">\r\n      <mat-card-header style=\"background-color:#56B8B9\">\r\n        <mat-list role=\"list\">\r\n          <mat-card-title style=\"background-color:#56B8B9\"><h5 style=\"color: white\">{{ spaSpecialist.firstName }} {{ spaSpecialist.lastName }}</h5></mat-card-title>\r\n        </mat-list>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"./../../assets/spa-specialists/{{spaSpecialist.spaSpecialistId}}.jpeg\" alt=\"SPA Specialisto Nuotrauka\">\r\n      <mat-card-content>\r\n          <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" >\r\n              <mat-icon aria-hidden=\"false\">email</mat-icon>\r\n              {{ spaSpecialist.emailAddress }}\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n              <mat-icon aria-hidden=\"false\">phone</mat-icon>\r\n              {{ spaSpecialist.phoneNumber }}\r\n            </mat-list-item>\r\n            <mat-card *ngFor=\"let category of spaSpecialist.categories.split(',')\" class=\"text-center\" style=\"background-color: white; margin-bottom: 20px;\"><h6 style=\"color: black;\">{{ category }}</h6></mat-card>\r\n          </mat-list>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
class AppConfig {
    constructor() {
        this.apiUrl = 'https://spa-tadas-ambrazaitis.azurewebsites.net/'; // URL to REST API
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_spa_specialists_spa_specialists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spa-specialists/spa-specialists.component */ "./src/app/components/spa-specialists/spa-specialists.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_my_reservations_my_reservations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-reservations/my-reservations.component */ "./src/app/components/my-reservations/my-reservations.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/components/basket/basket.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'spa-specialists', component: _components_spa_specialists_spa_specialists_component__WEBPACK_IMPORTED_MODULE_3__["SpaSpecialistsComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'my-reservations', component: _components_my_reservations_my_reservations_component__WEBPACK_IMPORTED_MODULE_7__["MyReservationsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'basket', component: _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_8__["BasketComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'schedule', component: _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1405px) {\r\n  .container-fluid {\r\n    width: 1400px;\r\n  }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTQwNXB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTQwMHB4O1xyXG4gIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
        document.body.style.background = '#E0E6E8';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _filterPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterPipe */ "./src/app/filterPipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_spa_specialists_spa_specialists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/spa-specialists/spa-specialists.component */ "./src/app/components/spa-specialists/spa-specialists.component.ts");
/* harmony import */ var _components_my_reservations_my_reservations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/my-reservations/my-reservations.component */ "./src/app/components/my-reservations/my-reservations.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/components/basket/basket.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-config */ "./src/app/app-config.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngui/datetime-picker */ "./node_modules/@ngui/datetime-picker/dist/index.js");
/* harmony import */ var _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























class CustomDateFormatter extends angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarNativeDateFormatter"] {
    dayViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
            _components_spa_specialists_spa_specialists_component__WEBPACK_IMPORTED_MODULE_16__["SpaSpecialistsComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
            _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_19__["ScheduleComponent"],
            _components_my_reservations_my_reservations_component__WEBPACK_IMPORTED_MODULE_17__["MyReservationsComponent"],
            _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_18__["BasketComponent"],
            _filterPipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _ngui_datetime_picker__WEBPACK_IMPORTED_MODULE_24__["NguiDatetimePickerModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot({
                positionClass: "toast-bottom-full-width",
                preventDuplicates: true,
                enableHtml: true
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastContainerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_20__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_21__["adapterFactory"]
            }, {
                dateFormatter: {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarDateFormatter"],
                    useClass: CustomDateFormatter
                }
            }),
        ],
        providers: [_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/basket/basket.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/basket/basket.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bas {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/basket/basket.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/basket/basket.component.ts ***!
  \*******************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/spaService.service */ "./src/app/services/spaService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let BasketComponent = class BasketComponent {
    constructor(_spaServiceService, _customerService, router, basketService, toastrService) {
        this._spaServiceService = _spaServiceService;
        this._customerService = _customerService;
        this.router = router;
        this.basketService = basketService;
        this.toastrService = toastrService;
        this.formFieldControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.formFieldControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.formFieldControl3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.formFieldControl4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.spaServices = [];
        this.cartItemsFinal = [];
        this.currentDate = new Date();
        this.reservation = {};
        this.visibleLoader = true;
        this.customer = JSON.parse(localStorage.getItem('customer'));
    }
    ngOnInit() {
        this.cartItems = (Array.from(this.basketService.getCartItems())).map(Number);
        this.getSpaServices();
    }
    getSpaServices() {
        this._spaServiceService.getSpaServices().subscribe((spaServices) => {
            this.cartItemsFinal = spaServices.filter((spaService) => this.cartItems.includes(spaService.spaServiceId));
            this.visibleLoader = false;
        });
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
            this.toastrService.error("I??vykimo data negali b??ti ankstesn?? nei atvykimo data!");
            return;
        }
        if (this.start.getDate() === this.currentDate.getDate() || this.end.getDate() === this.currentDate.getDate()) {
            this.toastrService.error("Paslaug?? negalima rezervuoti t?? pa??i?? dien??!");
            return;
        }
        if (this.start < this.currentDate || this.end < this.currentDate) {
            this.toastrService.error("Paslaug?? negalima rezervuoti atgaline data!");
            return;
        }
        this.visibleLoader = true;
        this.reservation.Start = this.start.toISOString();
        this.reservation.End = this.end.toISOString();
        this.reservation.TotalAmount = this.getTotalAmount();
        this.reservation.CustomerId = this.customer.customerId;
        this.reservation.SpaServiceIds = this.cartItems.toString();
        this.reservation.PaymentMethod = this.paymentMethod;
        this.reservation.Status = "Neapmok??ta";
        this.reservation.TimePreference = this.timePreference;
        this.basketService.createReservation(this.reservation).subscribe((data) => {
            this.toastrService.success("Rezervacija atlikta!");
            sessionStorage.clear();
            this.visibleLoader = false;
            this.router.navigate(['/my-reservations']);
        }, (error) => {
            this.toastrService.error("Rezervacijos atlikti ??iam laikotarpiui nepavyko, pabandykite atsisakyti paslaug?? arba pakeisti laikotarp??!");
            this.visibleLoader = false;
        });
        setTimeout(() => {
        }, 50000);
    }
};
BasketComponent.ctorParameters = () => [
    { type: src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_3__["SpaServiceService"] },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
BasketComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-basket',
        template: __webpack_require__(/*! raw-loader!./basket.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/basket/basket.component.html"),
        styles: [__webpack_require__(/*! ./basket.component.css */ "./src/app/components/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_3__["SpaServiceService"], src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], BasketComponent);



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CarouselComponent = class CarouselComponent {
    constructor(config) {
        config.interval = 2500;
        config.wrap = true;
        config.pauseOnHover = false;
        config.keyboard = false;
    }
    ngOnInit() {
    }
};
CarouselComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }
];
CarouselComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
], CarouselComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    background-color: #efefef;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FooterComponent = class FooterComponent {
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HeaderComponent = class HeaderComponent {
    ngOnInit() {
    }
};
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hom {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.myAccordion .mat-expansion-panel-header-title,\r\n.myAccordion .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n  align-items: center;\r\n}\r\n\r\n.myAccordion .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n}\r\n\r\n.myAccordion .mat-form-field + .mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbSB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5teUFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5teUFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm15QWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubXlBY2NvcmRpb24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spaService.service */ "./src/app/services/spaService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomepageComponent = class HomepageComponent {
    constructor(_spaServiceService, _basketService, router, toastrService) {
        this._spaServiceService = _spaServiceService;
        this._basketService = _basketService;
        this.router = router;
        this.toastrService = toastrService;
        this.spaServices = [];
    }
    ngOnInit() {
        this.getSpaServices();
    }
    getSpaServices() {
        this._spaServiceService.getSpaServices().subscribe((spaServices) => {
            this.spaServices = spaServices;
            this.categories = [...new Set(this.spaServices.map(item => item.category))];
        });
    }
    addToCart(spaService) {
        this._basketService.addToCartArray(spaService);
        this.toastrService.success("Paslauga prid??ta ?? krep??el??!");
    }
};
HomepageComponent.ctorParameters = () => [
    { type: src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_1__["SpaServiceService"] },
    { type: src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
HomepageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_spaService_service__WEBPACK_IMPORTED_MODULE_1__["SpaServiceService"], src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], HomepageComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    color:#007bff;\r\n}\r\n\r\n.mgTp{\r\n    margin-top:5%;\r\n}\r\n\r\n.topBtn{\r\n    margin-top:5px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #007bff !important;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color: #007bff !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFIQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBSEE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUhBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIGNvbG9yOiMwMDdiZmY7XHJcbn1cclxuXHJcbi5tZ1Rwe1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxufVxyXG5cclxuLnRvcEJ0bntcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(_authenticationService, _toastrService, _router) {
        this._authenticationService = _authenticationService;
        this._toastrService = _toastrService;
        this._router = _router;
        this.model = {};
    }
    ngOnInit() {
    }
    login() {
        this._authenticationService.login(this.model.emailAddress, this.model.password).subscribe(() => {
            this._toastrService.success("S??kmingai prisijung??te!");
            this._router.navigate(['']);
        }, (error) => {
            this._toastrService.error("Neteisingi duomenys!");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/my-reservations/my-reservations.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/my-reservations/my-reservations.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rez {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1yZXNlcnZhdGlvbnMvbXktcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1yZXNlcnZhdGlvbnMvbXktcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV6IHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/my-reservations/my-reservations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/my-reservations/my-reservations.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReservationsComponent", function() { return MyReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MyReservationsComponent = class MyReservationsComponent {
    constructor(_customerService, router, toastrService) {
        this._customerService = _customerService;
        this.router = router;
        this.toastrService = toastrService;
        this.reservations = [];
        this.visibleLoader = false;
        this.customer = JSON.parse(localStorage.getItem('customer'));
    }
    ngOnInit() {
        this.getMyReservations();
    }
    getMyReservations() {
        this.visibleLoader = true;
        this._customerService.getCustomerReservations(this.customer.customerId).subscribe((reservations) => {
            this.visibleLoader = false;
            this.reservations = reservations;
        });
    }
    pay(id, amount) {
        this.visibleLoader = true;
        this._customerService.payForReservation(id, amount).subscribe((data) => {
            this.visibleLoader = false;
            this.toastrService.success("S??kmingai apmok??ta!");
        }, (error) => {
            this.visibleLoader = false;
            this.toastrService.error(error.error);
        });
        setTimeout(() => {
            this.getMyReservations();
        }, 3000);
    }
    cancel(id) {
        this.visibleLoader = true;
        this._customerService.cancelReservation(id).subscribe((data) => {
            this.visibleLoader = false;
            this.toastrService.warning("Rezervacija at??aukta!");
        }, (error) => {
            this.visibleLoader = false;
            this.toastrService.error(error.error);
        });
        setTimeout(() => {
            this.getMyReservations();
        }, 3000);
    }
};
MyReservationsComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
MyReservationsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-reservations',
        template: __webpack_require__(/*! raw-loader!./my-reservations.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-reservations/my-reservations.component.html"),
        styles: [__webpack_require__(/*! ./my-reservations.component.css */ "./src/app/components/my-reservations/my-reservations.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], MyReservationsComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NavbarComponent = class NavbarComponent {
    constructor(_authenticationService, toastrService, _router) {
        this._authenticationService = _authenticationService;
        this.toastrService = toastrService;
        this._router = _router;
        this._authenticationService.currentCustomer.subscribe(x => this.currentCustomer = x);
    }
    ngOnInit() {
    }
    logout() {
        this._authenticationService.logout();
        this._router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    color:#007bff;\r\n}\r\n\r\n.mgTp{\r\n    margin-top:5%;\r\n}\r\n\r\n.topBtn{\r\n    margin-top:5px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n::placeholder {\r\n    color: #007bff !important;\r\n    opacity: 1;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #007bff !important;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color: #007bff !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFIQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBSEE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUhBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIGNvbG9yOiMwMDdiZmY7XHJcbn1cclxuXHJcbi5tZ1Rwe1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxufVxyXG5cclxuLnRvcEJ0bntcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegisterComponent = class RegisterComponent {
    constructor(_customerService, toastr, router) {
        this._customerService = _customerService;
        this.toastr = toastr;
        this.router = router;
        this.model = {};
    }
    ngOnInit() {
    }
    register() {
        this._customerService.register(this.model).subscribe((data) => {
            this.toastr.success('S??kmingai u??siregistravote!');
            this.router.navigate(['login']);
        }, (error) => {
            this.toastr.error(error.error);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.modal-dialog {\r\n  position: absolute;\r\n  top: 50%;\r\n  /*half of the modal height*/\r\n  margin-top: -100px;\r\n  left: 50%;\r\n  /*half of the modal width*/\r\n  margin-left: -180px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZSB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICAvKmhhbGYgb2YgdGhlIG1vZGFsIGhlaWdodCovXHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICAvKmhhbGYgb2YgdGhlIG1vZGFsIHdpZHRoKi9cclxuICBtYXJnaW4tbGVmdDogLTE4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_lt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/lt */ "./node_modules/@angular/common/locales/lt.js");
/* harmony import */ var _angular_common_locales_lt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_lt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/spaSpecialist.service */ "./src/app/services/spaSpecialist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_lt__WEBPACK_IMPORTED_MODULE_5___default.a);
let ScheduleComponent = class ScheduleComponent {
    constructor(_customerService, _spaSpecialistService) {
        this._customerService = _customerService;
        this._spaSpecialistService = _spaSpecialistService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.viewDate = new Date();
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.events = [];
        this.dayStartHour = 8;
        this.dayEndHour = 18;
        this.reservations = [];
        this.visibleLoader = false;
        this.locale = "lt";
        this.startWeek = 1;
        this.spaSpecialists = [];
        this.customer = JSON.parse(localStorage.getItem('customer'));
    }
    ngOnInit() {
        this.events = [];
        this.visibleLoader = true;
        this.getSpaSpecialists();
        this.refresh.next();
    }
    getSpaSpecialists() {
        this._spaSpecialistService.getSpaSpecialists().subscribe((spaSpecialists) => {
            this.spaSpecialists = spaSpecialists;
            this.getMyReservations();
        });
    }
    getMyReservations() {
        this._customerService.getCustomerReservations(this.customer.customerId).subscribe((reservations) => {
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
        });
    }
    eventClicked({ event }) {
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
};
ScheduleComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"] },
    { type: _services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_6__["SpaSpecialistService"] }
];
ScheduleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/schedule/schedule.component.html"),
        styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/components/schedule/schedule.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_6__["SpaSpecialistService"]])
], ScheduleComponent);



/***/ }),

/***/ "./src/app/components/spa-specialists/spa-specialists.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/spa-specialists/spa-specialists.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hom {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.myAccordion .mat-expansion-panel-header-title,\r\n.myAccordion .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n  align-items: center;\r\n}\r\n\r\n.myAccordion .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n}\r\n\r\n.myAccordion .mat-form-field + .mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.mat-card-header {\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGEtc3BlY2lhbGlzdHMvc3BhLXNwZWNpYWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwYS1zcGVjaWFsaXN0cy9zcGEtc3BlY2lhbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob20ge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ubXlBY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4ubXlBY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teUFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm15QWNjb3JkaW9uIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/spa-specialists/spa-specialists.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/spa-specialists/spa-specialists.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpaSpecialistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaSpecialistsComponent", function() { return SpaSpecialistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spaSpecialist.service */ "./src/app/services/spaSpecialist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SpaSpecialistsComponent = class SpaSpecialistsComponent {
    constructor(_spaSpecialistService, router) {
        this._spaSpecialistService = _spaSpecialistService;
        this.router = router;
        this.spaSpecialists = [];
    }
    ngOnInit() {
        this.getSpaSpecialists();
    }
    getSpaSpecialists() {
        this._spaSpecialistService.getSpaSpecialists().subscribe((spaSpecialists) => {
            this.spaSpecialists = spaSpecialists;
        });
    }
};
SpaSpecialistsComponent.ctorParameters = () => [
    { type: src_app_services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_1__["SpaSpecialistService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SpaSpecialistsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-spa-specialists',
        template: __webpack_require__(/*! raw-loader!./spa-specialists.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/spa-specialists/spa-specialists.component.html"),
        styles: [__webpack_require__(/*! ./spa-specialists.component.css */ "./src/app/components/spa-specialists/spa-specialists.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_services_spaSpecialist_service__WEBPACK_IMPORTED_MODULE_1__["SpaSpecialistService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SpaSpecialistsComponent);



/***/ }),

/***/ "./src/app/filterPipe.ts":
/*!*******************************!*\
  !*** ./src/app/filterPipe.ts ***!
  \*******************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterPipe = class FilterPipe {
    transform(items, max_price, category, duration) {
        if (max_price == null && category == null && duration == null)
            return items;
        var filtereditems = [];
        // Filter each
        if (max_price) {
            filtereditems = items.filter(t => t.price <= max_price);
        }
        if (duration) {
            filtereditems = items.filter(t => t.durationMinutes <= duration);
        }
        if (category) {
            filtereditems = items.filter(t => t.category == category);
        }
        if (category && max_price) {
            filtereditems = items.filter(t => t.price <= max_price);
            if (category != "Visos") {
                filtereditems = filtereditems.filter(t => t.category == category);
            }
        }
        if (category && duration) {
            filtereditems = items.filter(t => t.durationMinutes <= duration);
            if (category != "Visos") {
                filtereditems = filtereditems.filter(t => t.category == category);
            }
        }
        if (duration && max_price) {
            filtereditems = items.filter(t => t.price <= max_price);
            filtereditems = filtereditems.filter(t => t.durationMinutes <= duration);
        }
        if (category && max_price && duration) {
            filtereditems = items.filter(t => t.price <= max_price);
            filtereditems = filtereditems.filter(t => t.durationMinutes <= duration);
            if (category != "Visos") {
                filtereditems = filtereditems.filter(t => t.category == category);
            }
        }
        console.log("filtered", filtereditems);
        return filtereditems;
    }
};
FilterPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(router, state) {
        if (localStorage.getItem('customer')) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ "./src/app/app-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AuthenticationService = class AuthenticationService {
    constructor(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        this.currentCustomerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('customer')));
        this.currentCustomer = this.currentCustomerSubject.asObservable();
    }
    get currentCustomerValue() {
        return this.currentCustomerSubject.value;
    }
    login(emailAddress, password) {
        return this._http.post(this._appConfig.apiUrl + '/api/customer/Authenticate', { emailAddress, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(customer => {
            if (customer && customer.token) {
                localStorage.setItem('customer', JSON.stringify(customer));
                this.currentCustomerSubject.next(customer);
            }
            return customer;
        }));
    }
    logout() {
        localStorage.clear();
        localStorage.removeItem('reservation');
        localStorage.removeItem('attr');
        localStorage.removeItem('spaService');
        this.currentCustomerSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }
];
AuthenticationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/basket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/basket.service.ts ***!
  \********************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ "./src/app/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BasketService = class BasketService {
    constructor(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
        this.cartArraySet = new Set();
    }
    addToCartArray(productArray) {
        this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
        if (this.cartArray == null) {
            this.cartArray = Object.values(productArray);
        }
        this.cartArray = Object.values(this.cartArray);
        this.cartArray.push(JSON.stringify(productArray));
        sessionStorage.setItem("cartItems", JSON.stringify(this.cartArray));
        this.cartArraySet = new Set(this.cartArray);
    }
    removeFromCartArray(id) {
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
    createReservation(reservation) {
        console.log(reservation);
        return this._http.post(this._appConfig.apiUrl + '/api/Reservation/CreateReservation', reservation);
    }
};
BasketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }
];
BasketService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
], BasketService);



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ "./src/app/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CustomerService = class CustomerService {
    constructor(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
    }
    register(customer) {
        return this._http.post(this._appConfig.apiUrl + '/api/customer/register', customer);
    }
    getCustomerReservations(customerId) {
        return this._http.get(this._appConfig.apiUrl + '/api/Customer/GetCustomerReservations/' + customerId);
    }
    getCustomerReservationSpaServices(spaServiceIds) {
        return this._http.get(this._appConfig.apiUrl + '/api/Customer/GetCustomerReservationSpaServices/' + spaServiceIds);
    }
    payForReservation(reservationId, totalAmount) {
        return this._http.post(this._appConfig.apiUrl + '/api/Reservation/PayForReservation', { reservationId, totalAmount });
    }
    cancelReservation(reservationId) {
        return this._http.post(this._appConfig.apiUrl + '/api/Reservation/CancelReservation', { reservationId });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }
];
CustomerService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
], CustomerService);



/***/ }),

/***/ "./src/app/services/spaService.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/spaService.service.ts ***!
  \************************************************/
/*! exports provided: SpaServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaServiceService", function() { return SpaServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ "./src/app/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SpaServiceService = class SpaServiceService {
    constructor(_http, appConfig) {
        this._http = _http;
        this.appConfig = appConfig;
    }
    getSpaServices() {
        return this._http.get(this.appConfig.apiUrl + '/api/SpaService/GetSpaServices');
    }
};
SpaServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }
];
SpaServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
], SpaServiceService);



/***/ }),

/***/ "./src/app/services/spaSpecialist.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/spaSpecialist.service.ts ***!
  \***************************************************/
/*! exports provided: SpaSpecialistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaSpecialistService", function() { return SpaSpecialistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config */ "./src/app/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SpaSpecialistService = class SpaSpecialistService {
    constructor(_http, appConfig) {
        this._http = _http;
        this.appConfig = appConfig;
    }
    getSpaSpecialists() {
        return this._http.get(this.appConfig.apiUrl + '/api/SpaSpecialist/getSpaSpecialists');
    }
};
SpaSpecialistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }
];
SpaSpecialistService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
], SpaSpecialistService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Bakalaurinis Darbas\SPA Services Reservation System\SPA_Services_Reservation_System\SPA_Services_Reservation_System\Front_End\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map