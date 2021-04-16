import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Observable, Subscription } from 'rxjs';
declare var jQuery:any;

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
  public currentPage = 0;
  public totalPages = 1;
  showData() {
    this.service.getData(this.currentPage)
      .subscribe((data) => {
        this.csv_data = data['data'];
        this.totalPages = data['pages'];
       });
  }

  onPrev() {
    this.currentPage--;
    if (this.currentPage < 0) {
      this.currentPage = 0;
    } else {
      this.service.getData(this.currentPage)
      .subscribe((data) => {
        this.csv_data = data['data'];
        this.totalPages = data['pages'];
      });
      this.service.getData(this.currentPage);
    }
   
  }

  onNext() {
    this.currentPage++;
    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages-1;
    } else {
       this.service.getData(this.currentPage)
       .subscribe((data) => {
        this.csv_data = data['data'];
         this.totalPages = data['pages'];
      });
    }
  }

  onClickSubmit(data) {
    if (data && data.open && data.close) {
      jQuery("#exampleModal").modal("hide");
      data['date'] = new Date();
      this.service.addData(data)
      .subscribe((result) => {
        console.log('data after submition', result)
      });
    }
 }

}
