import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseUrlService} from "./base-url.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHeader: { ApiKey: string } = {
    "ApiKey": "ApiKeyApi"
  }

  constructor(private http: HttpClient, private baseUrl: BaseUrlService) {
  }

  // Define API endpoint URL and send GET request
  getDemosOfUser(userId: number) {
    return this.http.get(this.baseUrl.Url + 'demo/' + userId, {
      headers: this.apiHeader
    });
  }

  addDemo(demoName: object) {
    return this.http.post(this.baseUrl.Url + 'Demo/add', demoName)
  }
}
