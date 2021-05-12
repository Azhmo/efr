import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { F1CalendarTrack } from '../common';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  calendarTracks: F1CalendarTrack[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTracks().subscribe((response) => {
      this.calendarTracks = response.filter((track) => !!track.date).map((track) => {
        return {
          ...track,
          date: new Date(track.date),
        }
      }).sort((a, b) => a.date.getTime() - b.date.getTime());
    });
  }
}
