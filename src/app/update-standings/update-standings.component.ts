import { Component, OnInit } from '@angular/core';
import { F1Team, PlayerRank, F1TeamRank } from '../common';
import { HttpService } from '../http/http.service';

interface Result {
  position: number | string;
  name: string;
  team: F1Team | undefined;
  points: number;
}

@Component({
  selector: 'app-update-standings',
  templateUrl: './update-standings.component.html',
  styleUrls: ['./update-standings.component.scss'],
  providers: [HttpService],
})
export class UpdateStandingsComponent implements OnInit {
  results: Result[];
  players: PlayerRank[];
  oldPlayers: PlayerRank[];
  teams: F1TeamRank[];
  oldTeams: F1TeamRank[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTeamsRank().subscribe((response) => {
      this.teams = this.sortByPoints(response);
      this.oldTeams = JSON.parse(JSON.stringify(this.teams));
    });
    this.httpService.getPlayersRank().subscribe((response) => {
      this.players = this.sortByPoints(response);
      this.oldPlayers = JSON.parse(JSON.stringify(this.players));
    });

    this.resetResults();
  }

  resetResults(): void {
    this.results = [
      {
        position: 1,
        name: '',
        team: undefined,
        points: 25,
      },
      {
        position: 2,
        name: '',
        team: undefined,
        points: 18,
      },
      {
        position: 3,
        name: '',
        team: undefined,
        points: 15,
      },
      {
        position: 4,
        name: '',
        team: undefined,
        points: 12,
      },
      {
        position: 5,
        name: '',
        team: undefined,
        points: 10,
      },
      {
        position: 6,
        name: '',
        team: undefined,
        points: 8,
      },
      {
        position: 7,
        name: '',
        team: undefined,
        points: 6,
      },
      {
        position: 8,
        name: '',
        team: undefined,
        points: 4,
      },
      {
        position: 9,
        name: '',
        team: undefined,
        points: 2,
      },
      {
        position: 10,
        name: '',
        team: undefined,
        points: 1,
      },
      {
        position: '11',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '12',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '13',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '14',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '15',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '16',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '17',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: '18',
        name: '',
        team: undefined,
        points: 0,
      }, {
        position: '19',
        name: '',
        team: undefined,
        points: 0,
      }, {
        position: '20',
        name: '',
        team: undefined,
        points: 0,
      },
      {
        position: 'Fastest lap',
        name: '',
        team: undefined,
        points: 1,
      },
      {
        position: 'Bonus no penalties',
        name: '',
        team: undefined,
        points: 1,
      },
    ];
  }

  public sortByPoints(teams: any[]): any[] {
    if (!teams) {
      return [];
    }
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

  public generateRaceStandings() {
    this.players.forEach((player) => {
      const raceResult = this.results.find(
        (result) => result.position == player.currentRacePosition
      );

      if (player.hasFastestLap) {
        const fasterLapRaceResult = this.results.find((result) => result.position === 'Fastest lap')
        raceResult.points += 1;
        fasterLapRaceResult.name = player.name;
        fasterLapRaceResult.team = player.team !== 'Res' ? player.team : player.provisionalTeam;;
      }

      if (player.hasBonusPoint) {
        const bonusPointRaceResult = this.results.find((result) => result.position === 'Bonus no penalties')
        raceResult.points += 1;
        bonusPointRaceResult.name = player.name;
        bonusPointRaceResult.team = player.team !== 'Res' ? player.team : player.provisionalTeam;;
      }

      const teamRaceResult = this.teams.find((team) => team.name === (player.team !== 'Res' ? player.team : player.provisionalTeam));
      if (raceResult) {
        raceResult.name = player.name;
        raceResult.team = player.team !== 'Res' ? player.team : player.provisionalTeam;
        //update player
        player.points += raceResult.points;
        //update team
        teamRaceResult.points += raceResult.points;
      }
    });
  }

  generatePlayerStandings() {
    this.sortByPoints(this.players).forEach((player, index) => {
      const oldPlayerIndex = this.oldPlayers.findIndex(
        (oldPlayer) => oldPlayer.name === player.name
      );
      player.gain = oldPlayerIndex - index;
      player.hasFastestLap = false;
      player.hasBonusPoint = false;
      player.currentRacePosition = undefined;
      player.provisionalTeam = undefined;
    });

    this.copyStringToClipboard(JSON.stringify(this.players));
  }

  generateTeamStandings() {
    this.sortByPoints(this.teams).forEach((team, index) => {
      const oldTeamIndex = this.oldTeams.findIndex(
        (oldTeam) => oldTeam.name === team.name
      );
      team.gain = oldTeamIndex - index;
    });

    this.copyStringToClipboard(JSON.stringify(this.teams));
  }

  copyStringToClipboard(str) {
    // Create new element
    let el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
  }

  // drag(event) {
  //   const playerName = event.target.children[1].textContent;
  //   const playerJson = this.players.find(
  //     (player) => player.name === playerName
  //   );
  //   event.dataTransfer.setData('text/plain', JSON.stringify(playerJson));
  // }

  // drop(event) {
  //   const transferPlayer = JSON.parse(
  //     event.dataTransfer.getData('text/plain')
  //   ) as PlayerRank;
  //   const newPosition =
  //     event.target.parentElement.children[0].children[1].textContent;
  //   const newResult = this.results.find(
  //     (result) => result.position == newPosition
  //   );

  //   // update team standings
  //   this.teams.find((team) => team.name === transferPlayer.team).points +=
  //     newResult.points;

  //   // update general standings
  //   const playerFound = this.players.find(
  //     (player) => player.name === transferPlayer.name
  //   );
  //   playerFound.points += newResult.points;

  //   // update race standings
  //   newResult.name = transferPlayer.name;
  //   newResult.team = transferPlayer.team;
  // }

  // allowDrop(ev) {
  //   ev.preventDefault();
  // }
}
