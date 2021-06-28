import { Component, OnInit } from '@angular/core';
import { F1CalendarTrack } from 'src/app/common';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-list-tracks',
  templateUrl: './list-tracks.component.html',
  styleUrls: ['./list-tracks.component.scss']
})
export class ListTracksComponent implements OnInit {
  tracks: F1CalendarTrack[];
  date: Date;

  constructor(private httpService: HttpService) { this.date = new Date(); }

  ngOnInit(): void {
    this.httpService.getTracks().subscribe((response) => this.tracks = response)
  }

  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }

  save(track: F1CalendarTrack) {
    this.httpService.addTrack(track).subscribe(() => this.ngOnInit())
  }

  clearDate(track: F1CalendarTrack) {
    this.httpService.addTrack({ ...track, date: null }).subscribe(() => this.ngOnInit());
  }

}
