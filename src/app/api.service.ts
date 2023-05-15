import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrlService } from "./base-url.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHeader: { ApiKey: string } = {
    "ApiKey": "ApiKeyApi"
  }

  //#region default JSON
  defaultJson = {"root":{"id":"s1681993885978","type":"flowchartStepContent","data":{"Title":"User Input","Type":"user","Content":"hello, good, morning, evening"},"children":[{"id":"s1681993932118","type":"flowchartStepContent","data":{"Title":"System response","Type":"system","Content":"Hello, how can I help you?"},"children":[{"id":"s1681994358332","type":"flowchartStepContent","data":{"Title":"System response","Type":"system","Content":"Or do you have a question I can answer?"},"children":[{"id":"s1683805412124","type":"flowchartStepContent","data":{"Title":"User Input","Type":"user","Content":"Thanks"},"children":[]},{"id":"s1683805414118","type":"flowchartStepContent","data":{"Title":"User Input","Type":"user","Content":""},"children":[]}]}]}]},"connectors":[]}
  //#endregion
  constructor(private http: HttpClient, private baseUrl: BaseUrlService) {
  }

  // Define API endpoint URL and send GET request
  getDemosOfUser(userId: number) {
    return this.http.get(this.baseUrl.Url + 'demo/' + userId, {
      headers: this.apiHeader
    });
  }
  getDemo(demoId: number) {
    return this.http.get(this.baseUrl.Url + 'demo/Single/' + demoId, {
      headers: this.apiHeader
    });
  }

  editDemo(demoId: number, demoName?: string, demoDescription?: string, demoVisibility?: boolean) {
    const body = {
      id: demoId,
      name: demoName,
      description: demoDescription,
      visibility: demoVisibility
    }

    return this.http.put(this.baseUrl.Url + 'demo/' + demoId, body, { headers: this.apiHeader })
  }

  addDemo(demoName: string, userId: number): Observable<any> {
    const body = {
      demoName: demoName,
      userId: userId,
    };

    return this.http.post(this.baseUrl.Url + 'demo/add/' + userId, JSON.stringify(body), { headers: this.apiHeader })
  }
  deleteDemo(demoId: number) {
    return this.http.delete(this.baseUrl.Url + "Demo/" + demoId, { headers: this.apiHeader })
  }

  getQuestions(demoId: number) {
    return this.http.get(this.baseUrl.Url + "Demo/" + demoId + "/flows", { headers: this.apiHeader })
  }

  login(name: string, password: string) {
    const body = {
      id: 0,
      name: name,
      password: password
    }
    return this.http.post(this.baseUrl.Url + 'Account/Login', body, { headers: this.apiHeader });
  }
  getFlow(demoId: number, flowId: number) {
    return this.http.get(this.baseUrl.Url + 'demo/' + demoId + '/flow/' + flowId, { headers: this.apiHeader });
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
    return this.http.put(this.baseUrl.Url + "demo/" + demoId + "/flow/" + flowId + "/edit", body, { headers: this.apiHeader })
  }

  addFlow(demoId: number, flowName: string) {
    const body = {
      Id: 0,
      Name: flowName,
      Description: "",
      Json: JSON.stringify(this.defaultJson)
    }
    return this.http.post(this.baseUrl.Url + "demo/" + demoId + "/flow/add", body, { headers: this.apiHeader })
  }

  getFlowsOfDemo(demoId: number) {
    return this.http.get(this.baseUrl.Url + "demo/" + demoId + "/flows", { headers: this.apiHeader })
  }
}
