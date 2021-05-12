import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-calendar-next-season',
  templateUrl: './calendar-next-season.component.html',
  styleUrls: ['./calendar-next-season.component.scss'],
  providers: [HttpService],
})
export class CalendarNextSeasonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}
