import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _api: HttpClient) { }
  configUrl = 'http://localhost:3000/api/v1/data';
  
  getData(page) {
    const options = page ? { params: new HttpParams().set('page',page)}:{}
    return this._api.get(this.configUrl, options);
  }
}
