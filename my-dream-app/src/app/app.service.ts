import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Socket  } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _api: HttpClient, private _io:Socket) { }
  configUrl = 'http://localhost:3000/api/v1/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  public data = this._io.fromEvent<string[]>('data');
  
  getData(page) {
    // const options = page ? { params: new HttpParams().set('page',page)}:{}
    // return this._api.get(this.configUrl+ 'data', options);
    this._io.emit('getData', {page})
    return this.data;
  }

  addData(data) {
    // return this._api.post(this.configUrl+'create', data,this.httpOptions)
    this._io.emit('addData', data)
    return this.data;
  }
}
