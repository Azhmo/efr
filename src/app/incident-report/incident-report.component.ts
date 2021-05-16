import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

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

  saveIncidents() {
    let element = document.querySelector("#capture") as HTMLElement;
    html2canvas(element).then(function (canvas) {
      // Convert the canvas to blob
      canvas.toBlob(function (blob) {
        const now = new Date();
        // To download directly on browser default 'downloads' location
        let link = document.createElement("a");
        link.download = `incident-${now.getDate()}-${now.toLocaleString('default', { month: 'long' })}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
      }, 'image/png');
    });
  }
}
