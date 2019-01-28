import { Component, OnInit } from '@angular/core';
import { TestResultsService } from '../shared/services/test-results.service';
import { Observable } from 'rxjs';
import { SpeedTestResult } from '../shared/models/speed-test-result';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todaysTestResults$: Observable<SpeedTestResult[]>
  constructor(private testResultsService: TestResultsService,
    public authService: AuthService) { }

  ngOnInit() {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    this.todaysTestResults$ = this.testResultsService.getTestResult('Home', startOfToday, startOfTomorrow);
  }


}
