import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { PlayerRank, F1TeamRank } from '../common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  players: PlayerRank[];
  teams: F1TeamRank[];
  loading: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loading = true;
    forkJoin([this.httpService.getTeamsRank(), this.httpService.getPlayersRank()]).subscribe((response) => {
      this.teams = response[0];
      this.players = response[1];
    }, (err) => console.log(err), () => this.loading = false);
  }
}
