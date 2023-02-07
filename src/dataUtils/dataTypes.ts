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
}
