import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpeedTestResult } from '../models/speed-test-result';

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {

  speedTestUrl = '/api/results';
  constructor(private httpClient: HttpClient ) { }

  getTestResult(location: string, startDateTime: Date, endDateTime: Date): Observable<SpeedTestResult[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('startDateTime', startDateTime.toISOString());
    queryParams = queryParams.set('endDateTime', endDateTime.toISOString());
    return this.httpClient.get<SpeedTestResult[]>(`${this.speedTestUrl}/${location}`, { params: queryParams});
  }
}
