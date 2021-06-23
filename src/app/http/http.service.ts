import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerRank, F1TeamRank, F1CalendarTrack } from '../common';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  originUrl = 'https://efr-be.herokuapp.com';

  playersUrl = `${this.originUrl}/api/drivers`;
  teamsUrl = `${this.originUrl}/api/teams`;
  tracksUrl = `${this.originUrl}/api/tracks`;
  addTracksUrl = `${this.originUrl}/api/addTrack`;
  addDriverUrl = `${this.originUrl}/api/addDriver`;
  addDriversUrl = `${this.originUrl}/api/addDrivers`;
  addTeamUrl = `${this.originUrl}/api/addTeam`;
  addTeamsUrl = `${this.originUrl}/api/addTeams`;

  getPlayersRank(): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(this.playersUrl);
  }

  getTeamsRank(): Observable<F1TeamRank[]> {
    return this.http.get<F1TeamRank[]>(this.teamsUrl);
  }

  getTracks(): Observable<F1CalendarTrack[]> {
    return this.http.get<F1CalendarTrack[]>(this.tracksUrl);
  }

  addTracks(track: F1CalendarTrack): Observable<F1CalendarTrack[]> {
    return this.http.post<F1CalendarTrack[]>(this.addTracksUrl, track);
  }

  addDriver(driver: PlayerRank): Observable<PlayerRank[]> {
    return this.http.post<PlayerRank[]>(this.addDriverUrl, driver);
  }

  addDrivers(drivers: PlayerRank[]): Observable<PlayerRank[]> {
    return this.http.post<PlayerRank[]>(this.addDriversUrl, drivers);
  }

  addTeam(team: F1TeamRank): Observable<F1TeamRank[]> {
    return this.http.post<F1TeamRank[]>(this.addTeamUrl, team);
  }

  addTeams(teams: F1TeamRank[]): Observable<F1TeamRank[]> {
    return this.http.post<F1TeamRank[]>(this.addTeamsUrl, teams);
  }
}
