import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../card-component/card.component";
import {ApiService} from '../api.service';

@Component({
  selector: 'dashboard-demos-component',
  templateUrl: './dashboard-demos.component.html',
  styleUrls: ['./dashboard-demos.component.css']
})
export class DashboardDemosComponent implements OnInit {
  forecasts: Forecast[] = [];

  constructor(private apiService: ApiService) {
    this.forecasts = [];
  }

  ngOnInit() {
    this.apiService.getWeatherforecast().subscribe((data: any) => {
        this.forecasts = data;
      },
      error => {
        console.log(error)
      })
  }

  ConvertDate(dateStr: number) {
    let date = new Date(dateStr);
    return date.getDate()  + "-" + (date.getMonth()) + "-" + date.getFullYear() + " " +
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}

class Forecast {
  date: number = 0;
  temperatureC: number = 0;
  temperatureF: number = 0;
  summary: string = "";
}
