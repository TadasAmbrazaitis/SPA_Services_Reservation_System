import { Component, OnInit } from '@angular/core';
import { SpaService } from 'src/app/models/spaService';
import { SpaServiceService } from 'src/app/services/spaService.service';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  spaServices: SpaService[] = [];
  categories;
  filterPrice: number;
  filterCategory: string;
  filterDuration: number;

  constructor(private _spaServiceService: SpaServiceService, private _basketService: BasketService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getSpaServices();
  }

  getSpaServices() {
    this._spaServiceService.getSpaServices().subscribe(
      (spaServices: SpaService[]) => {
        this.spaServices = spaServices;
        this.categories = [...new Set(this.spaServices.map(item => item.category))];
      })
  }

  addToCart(spaService) {
    this._basketService.addToCartArray(spaService);
    this.toastrService.success("Paslauga pridėta į krepšelį!");
  }
}
