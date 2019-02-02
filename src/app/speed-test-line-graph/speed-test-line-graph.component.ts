import { Component, OnInit, Input } from '@angular/core';
import { SpeedTestResult } from '../shared/models/speed-test-result';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-speed-test-line-graph',
  templateUrl: './speed-test-line-graph.component.html',
  styleUrls: ['./speed-test-line-graph.component.scss']
})
export class SpeedTestLineGraphComponent implements OnInit {

  @Input() speedTestResults: SpeedTestResult[];
  location: string;
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  public lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          display: false
        }
      }]
    }
  };
  lineChartLegend = true;
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.location = this.speedTestResults[0].location;
    this.lineChartData = [
      { data: this.speedTestResults.map(r => r.averageDownloadSpeed / 1000), label: 'Download (Mbps)', fill: false},
      { data: this.speedTestResults.map(r => r.averageUploadSpeed / 1000), label: 'Upload (Mbps)', fill: false}
    ];
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    this.lineChartLabels = this.speedTestResults.map(r => new Date(r.executionDateTime).toLocaleDateString('en-AU', dateOptions));
  }
}
