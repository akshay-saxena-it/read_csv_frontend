import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _api: HttpClient) { }
  configUrl = 'http://localhost:3000/api/v1/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  getData(page) {
    const options = page ? { params: new HttpParams().set('page',page)}:{}
    return this._api.get(this.configUrl+ 'data', options);
  }

  addData(data) {

    return this._api.post(this.configUrl+'create', data,this.httpOptions)
  }
}
