import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { PlayerRank, F1TeamRank } from '../common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  players: PlayerRank[];
  teams: F1TeamRank[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getTeamsRank();
    this.httpService.getPlayersRank().subscribe((response) => {
      this.players = response;
    });
  }

  getTeamsRank() {
    this.httpService.getTeamsRank().subscribe((response) => {
      this.teams = response;
    });
  }
}
