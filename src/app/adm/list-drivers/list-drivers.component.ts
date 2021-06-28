import { Component, OnInit } from '@angular/core';
import { PlayerRank } from 'src/app/common';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {
  players: PlayerRank[]

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getPlayersRank().subscribe((players) => this.players = players);
  }

  delete(id: string): void {
    this.httpService.deleteDriver(id).subscribe(() => {
      this.httpService.getPlayersRank().subscribe((players) => this.players = players);
    });
  }

}
