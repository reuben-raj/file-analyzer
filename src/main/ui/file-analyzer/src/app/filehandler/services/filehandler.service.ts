import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Statistics } from "../models/statistics";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilehandlerService {

  private statisticsUrl = 'http://localhost:8080/statistics';
  private healthcheckUrl = 'http://localhost:8080/healthcheck';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getStatistics(file: File): Observable<Statistics> {
    const formData = new FormData();
    formData.append("csvFile", file);
    return this.http.post<Statistics>(this.statisticsUrl, formData);
  }

  getHealthcheck(): Observable<any> {
    return this.http.get(`${this.healthcheckUrl}`);
  }

}
