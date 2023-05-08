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

  addDemo(demoName: string, userId: number): Observable<any> {
    const body = {
      demoName: demoName,
      userId: userId,
    };

    return this.http.post(this.baseUrl.Url + 'demo/add/' + userId, JSON.stringify(body), {headers: this.apiHeader})
  }

  login(name: string, password: string) {
    const body = {
      id: 0,
      name: name,
      password: password
    }
    return this.http.post(this.baseUrl.Url + 'Account/Login', body, {headers: this.apiHeader});
  }

  getFlow(demoId: number, flowId: number) {
    return this.http.get(this.baseUrl.Url + 'demo/' + demoId + '/flow/' + flowId, {headers: this.apiHeader});
  }

  createFlow() {

  }

  updateFlow(demoId: number, flowId: number, name: string, description: string, json: string | object) {
    if (typeof (json) == "object") json = JSON.stringify(json)
    const body = {
      id: flowId,
      name: name,
      description: description,
      json: json
    }
    return this.http.put(this.baseUrl.Url + "demo/" + demoId + "/flow/" + flowId + "/edit", body, {headers: this.apiHeader})
  }
}
