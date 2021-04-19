import { Component, OnInit } from '@angular/core';
import { F1CalendarTrack, F1Track } from '../common';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-calendar-next-season',
  templateUrl: './calendar-next-season.component.html',
  styleUrls: ['./calendar-next-season.component.scss'],
  providers: [HttpService],
})
export class CalendarNextSeasonComponent implements OnInit {
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
