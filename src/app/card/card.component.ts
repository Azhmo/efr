import { Component, Input, OnInit } from '@angular/core';
import { F1Team, F1TeamRank, PlayerRank } from '../common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() drivers: PlayerRank[];
  @Input() f1Team: F1TeamRank;
  @Input() position: number;
  @Input() isPresentational: boolean;

  gain: number;
  points: number;
  team: F1Team;

  constructor() { }

  ngOnInit(): void {
    this.gain = this.f1Team ? this.f1Team.gain : this.drivers[0].gain;
    this.team = this.f1Team ? this.f1Team.name : this.drivers[0].team;
    this.points = this.f1Team ? this.f1Team.points : this.drivers[0].points;
  }

  public showGain(gain: number): number {
    return Math.abs(gain);
  }

  public getCountryFlagFromCode(countryCode: string) {
    return `https://lipis.github.io/flag-icon-css/flags/4x3/${countryCode.toLowerCase()}.svg`;
  }

}
