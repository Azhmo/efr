import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { F1TeamRank, PlayerRank } from '../common';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.scss'],
  providers: [HttpService],
})
export class ConstructorStandingsComponent implements OnInit {
  teams: F1TeamRank[];
  players: PlayerRank[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTeamsRank().subscribe((response) => {
      this.teams = this.sortByPoints(response);
    });

    this.httpService.getPlayersRank().subscribe((response) => {
      this.players = response;
    });
  }

  public showGain(gain: number): number {
    return Math.abs(gain);
  }

  public sortByPoints(teams: F1TeamRank[]): F1TeamRank[] {
    return teams.sort((n1, n2) => {
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
