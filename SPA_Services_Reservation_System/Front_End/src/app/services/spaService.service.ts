import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../app-config';
import { SpaService } from '../models/spaService';

@Injectable({
  providedIn: 'root'
})
export class SpaServiceService {

  constructor(private _http: HttpClient, private appConfig: AppConfig) { }

  getSpaServices() {
    return this._http.get<SpaService[]>(this.appConfig.apiUrl + '/api/SpaService/GetSpaServices');
  }
}
