import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:3000/api/v1/data';
  
  getData() {
    return this.http.get(this.configUrl);
  }
}
