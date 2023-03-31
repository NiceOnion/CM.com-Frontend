import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHeader: { ApiKey: string } = {
    "ApiKey": "ApiKeyApi"
  }

  constructor(private http: HttpClient) {
  }

  // Define API endpoint URL and send GET request
  getWeatherforecast() {
    return this.http.get('https://localhost:7258/weatherforecast', {
      headers: this.apiHeader
    });
  }
}
