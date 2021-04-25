import { Component, OnInit } from '@angular/core';
import { SpaSpecialist } from 'src/app/models/spaSpecialist';
import { SpaSpecialistService } from 'src/app/services/spaSpecialist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spa-specialists',
  templateUrl: './spa-specialists.component.html',
  styleUrls: ['./spa-specialists.component.css']
})
export class SpaSpecialistsComponent implements OnInit {

  spaSpecialists: SpaSpecialist[] = [];

  constructor(private _spaSpecialistService: SpaSpecialistService, private router: Router) { }

  ngOnInit() {
    this.getSpaSpecialists();
  }

  getSpaSpecialists() {
    this._spaSpecialistService.getSpaSpecialists().subscribe(
      (spaSpecialists: SpaSpecialist[]) => {
        this.spaSpecialists = spaSpecialists;
      })
  }
}
