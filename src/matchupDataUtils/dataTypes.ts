export interface Pick {
  seed: number;
  player: string;
  pick: string;
}

export interface Matchup {
  winner: string;
  loser: string;
  winVotes: number;
  lossVotes: number;
  round: number;
  matchup: number;
  judgeVote: boolean;
  winningSong: string;
  losingSong: string;
}

export interface BracketMatchup {
  round: number;
  matchup: number;
  side?: string;
  seeds?: number[];
  children?: BracketMatchup[];
  winner?: string;
  winningSong?: string;
  loser?: string;
  losingSong?: string;
  winVotes?: number;
  lossVotes?: number;
  judgeVote?: boolean;
  pick1?: string;
  pick1Seed?: number;
  player1?: string;
  pick2?: string;
  pick2Seed?: number;
  player2?: string;
}

export interface YObject {
  [key: string]: number;
}
