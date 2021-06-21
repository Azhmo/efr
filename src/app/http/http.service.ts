import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerRank, F1TeamRank, F1CalendarTrack } from '../common';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  originUrl = 'https://efr-be.herokuapp.com';

  playersUrl = 'data/players.json';
  teamsUrl = 'data/teams.json';
  tracksUrl = `${this.originUrl}/api/tracks`;
  addTracksUrl = `${this.originUrl}/api/addTrack`;

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
}
