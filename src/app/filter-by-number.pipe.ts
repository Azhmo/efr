import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRank, F1Team } from './common';

@Pipe({
  name: 'filterByNumber',
})
export class FilterByNumberPipe implements PipeTransform {
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
          nextRacePenalty: '',
          country: '',
          tier: 'gold',
          raceInvolvement: 0,
          isCleanDriver: false,
          hasCleanRace: false,
          consecutiveCleanRaces: 0,
          isPotentialCleanDriver: true,
        },
      ];
  }
}
