import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent implements OnInit {
  public incidents: number[];

  constructor() { }

  ngOnInit(): void {
    this.incidents = [1];
  }

  addIncident() {
    this.incidents.push(this.incidents.length + 1);
  }

}
