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
  nextRacePenalty: string;
  currentRacePosition?: number;
  hasFastestLap?: boolean;
  hasBonusPoint?: boolean;
  provisionalTeam?: F1Team;
  isCleanDriver: boolean;
  raceInvolvement: number;
  tier: EFRTier;
  hasPenalties: boolean;
  consecutiveCleanRaces: number;
  isPotentialCleanDriver: boolean;
}

export interface F1TeamRank {
  name: F1Team;
  gain: number;
  points: number;
}

export interface F1Track {
  name: string,
  flag: string,
}
export interface F1CalendarTrack extends F1Track {
  date?: Date;
}

export type EFRTier = 'gold' | 'silver';
