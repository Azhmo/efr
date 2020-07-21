import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerRank, F1TeamRank } from '../common';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  playersUrl = 'data/players.json';
  teamsUrl = 'data/teams.json';

  getPlayersRank(): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(this.playersUrl);
  }

  getTeamsRank(): Observable<F1TeamRank[]> {
    return this.http.get<F1TeamRank[]>(this.teamsUrl);
  }
}
