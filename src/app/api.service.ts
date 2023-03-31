import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Define API endpoint URL and send GET request
  getWeatherforecast() {
    return this.http.get('https://localhost:7258/weatherforecast');
  }
}
