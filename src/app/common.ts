export interface Player {
  name: string;
  team: F1Team;
  country: string;
}

export type F1Team =
  | 'Mercedes'
  | 'Ferrari'
  | 'RedBull'
  | 'Renault'
  | 'McLaren'
  | 'RacingPoint'
  | 'Alfa Romeo'
  | 'Toro Rosso'
  | 'Haas'
  | 'Williams'
  | '-'
  | 'Res';

export interface PlayerRank extends Player {
  gain: number;
  points: number;
  penaltyPoints: number;
  nextRacePenalties: string;
  currentRacePosition?: number;
  hasFastestLap?: boolean;
  hasBonusPoint?: boolean;
  provisionalTeam?: F1Team;
}

export interface F1TeamRank {
  name: F1Team;
  gain: number;
  points: number;
}
