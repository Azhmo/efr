import { Component, OnInit } from '@angular/core';
import { PlayerRank } from '../common';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.scss'],
})
export class PenaltiesComponent implements OnInit {
  players: PlayerRank[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPlayersRank().subscribe((response) => {
      this.players = this.sortByPenaltyPoints(response);
    });
  }

  public sortByPenaltyPoints(players: PlayerRank[]): PlayerRank[] {
    return players.sort((n1, n2) => {
      if (n1.penaltyPoints > n2.penaltyPoints) {
        return 1;
      }

      if (n1.penaltyPoints < n2.penaltyPoints) {
        return -1;
      }

      return 0;
    });
  }
}
