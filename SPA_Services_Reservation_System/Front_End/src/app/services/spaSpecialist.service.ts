import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../app-config';
import { SpaSpecialist } from '../models/spaSpecialist';

@Injectable({
  providedIn: 'root'
})
export class SpaSpecialistService {

  constructor(private _http: HttpClient, private appConfig: AppConfig) { }

  getSpaSpecialists() {
    return this._http.get<SpaSpecialist[]>(this.appConfig.apiUrl + '/api/SpaSpecialist/getSpaSpecialists');
  }
}
