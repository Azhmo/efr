import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRank, F1Team } from './common';

@Pipe({
  name: 'filterByTeam',
})
export class FilterPipe implements PipeTransform {
  transform(players: PlayerRank[], team: F1Team): PlayerRank[] {
    const filteredPlayers = players.filter((val) => val.team === team);
    return filteredPlayers.length > 0
      ? filteredPlayers
      : [
          {
            name: '-',
            gain: 0,
            points: 0,
            team,
            penaltyPoints: 0,
            nextRacePenalties: '',
          },
        ];
  }
}
