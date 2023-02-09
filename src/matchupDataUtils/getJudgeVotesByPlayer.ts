import { Matchup, Pick } from "./dataTypes";
import { getPlayerByPick } from "./getPlayerByPicks";

export function getJudgeVotesByPlayer(picks: Pick[], matchups: object[]) {
  const votesObj = matchups.reduce((voteObj, matchup: Matchup) => {
    if (matchup.judgeVote) {
      const player = getPlayerByPick(matchup.winner, picks);
      if (!voteObj.hasOwnProperty(player)) {
        return { ...voteObj, [player]: 1 };
      }
      return { ...voteObj, [player]: voteObj[player] + 1 };
    }
    return { ...voteObj };
  }, {});

  const playerSet = new Set();
  picks.forEach((pick) => playerSet.add(pick.player));
  const playerArray = Array.from(playerSet) as string[];
  const playersWithVotes = Object.keys(votesObj);

  const votesArray = playerArray
    .map((player) => {
      if (playersWithVotes.includes(player)) {
        return { player: player, yValue: votesObj[player] };
      }
      return { player: player, yValue: 0 };
    })
    .sort((a, b) => b.yValue - a.yValue);

  return votesArray;
}
