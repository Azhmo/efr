import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { PlayerRank } from '../common';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  providers: [HttpService],
})
export class StandingsComponent implements OnInit {
  players: PlayerRank[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPlayersRank().subscribe((response) => {
      this.players = this.sortByPoints(response);
    });
  }

  public sortByPoints(players: PlayerRank[]): PlayerRank[] {
    return players.sort((n1, n2) => {
      if (n1.points > n2.points) {
        return -1;
      }

      if (n1.points < n2.points) {
        return 1;
      }

      return 0;
    });
  }
}
