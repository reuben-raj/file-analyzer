import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Statistics } from "../models/statistics";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilehandlerService {

  private statisticsUrl = 'statistics'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  // public records: any[] = [];
  // @ViewChild('csvReader') csvReader: any;

  constructor(
    private http: HttpClient
  ) { }

  /*getStatistics(): Statistics {
    return this.http.get<Statistics>(this.statisticsUrl);
  }*/

  /*getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(this.http.get(statisticsUrl));
    // return this.http.get<Statistics>(this.statisticsUrl, statistics, {observe: 'response'});
  }*/

}
