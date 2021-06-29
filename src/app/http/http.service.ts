import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerRank, F1TeamRank, F1CalendarTrack } from '../common';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  originUrl = 'https://efr-be.herokuapp.com';

  driversUrl = `${this.originUrl}/api/drivers`;
  trackUrl = `${this.originUrl}/api/track`;
  tracksUrl = `${this.originUrl}/api/tracks`;
  driverUrl = `${this.originUrl}/api/driver`;
  addTeamUrl = `${this.originUrl}/api/addTeam`;
  addTeamsUrl = `${this.originUrl}/api/addTeams`;
  teamsUrl = `${this.originUrl}/api/teams`;

  getPlayersRank(): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(this.driversUrl);
  }

  getTeamsRank(): Observable<F1TeamRank[]> {
    return this.http.get<F1TeamRank[]>(this.teamsUrl);
  }

  getTracks(): Observable<F1CalendarTrack[]> {
    return this.http.get<F1CalendarTrack[]>(this.tracksUrl);
  }

  addTrack(track: F1CalendarTrack): Observable<F1CalendarTrack[]> {
    return this.http.post<F1CalendarTrack[]>(this.trackUrl, track);
  }

  addDriver(driver: PlayerRank): Observable<PlayerRank[]> {
    return this.http.post<PlayerRank[]>(this.driverUrl, driver);
  }

  getDriver(id: string): Observable<PlayerRank> {
    return this.http.get<PlayerRank>(`${this.driverUrl}/${id}`);
  }

  deleteDriver(id: string): Observable<PlayerRank> {
    return this.http.delete<PlayerRank>(`${this.driverUrl}/${id}`);
  }

  addDrivers(drivers: PlayerRank[]): Observable<PlayerRank[]> {
    return this.http.post<PlayerRank[]>(this.driversUrl, drivers);
  }

  addTeam(team: F1TeamRank): Observable<F1TeamRank[]> {
    return this.http.post<F1TeamRank[]>(this.addTeamUrl, team);
  }

  addTeams(teams: F1TeamRank[]): Observable<F1TeamRank[]> {
    return this.http.post<F1TeamRank[]>(this.addTeamsUrl, teams);
  }
}
