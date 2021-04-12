import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.showData()
  }
  public csv_data;
  showData() {
    this.service.getData()
      .subscribe((data) => {
        console.log('data', data)
        this.csv_data = data['data'];
      });
  }

}
