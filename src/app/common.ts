export interface Player {
  name: string;
  team: F1Team;
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
  | '-';

export interface PlayerRank extends Player {
  gain: number;
  points: number;
}

export interface F1TeamRank {
  name: F1Team;
  gain: number;
  points: number;
}
