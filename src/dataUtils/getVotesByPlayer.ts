import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick } from "./dataTypes";

export function getVotesByPlayer(picks: Pick[], matchups: object[]) {
  const voteWinsObj = matchups.reduce((voteObj, matchup: Matchup) => {
    const winningPlayer = getPlayerByPick(matchup.winner, picks);
    if (!voteObj.hasOwnProperty(winningPlayer)) {
      return { ...voteObj, [winningPlayer]: matchup.winVotes };
    }
    return {
      ...voteObj,
      [winningPlayer]: voteObj[winningPlayer] + matchup.winVotes,
    };
  }, {});
  const voteObj = matchups.reduce(
    (voteObj, matchup: Matchup) => {
      const losingPlayer = getPlayerByPick(matchup.loser, picks);

      if (!voteObj.hasOwnProperty(losingPlayer)) {
        return { ...voteObj, [losingPlayer]: matchup.lossVotes };
      }
      return {
        ...voteObj,
        [losingPlayer]: voteObj[losingPlayer] + matchup.lossVotes,
      };
    },
    { ...voteWinsObj }
  );

  const playerSet = new Set();
  picks.forEach((pick) => playerSet.add(pick.player));
  const playerArray = Array.from(playerSet) as string[];
  const playersWithWins = Object.keys(voteObj);

  const winsArray = playerArray
    .map((player) => {
      if (playersWithWins.includes(player)) {
        return { player: player, yValue: voteObj[player] };
      }
      return { player: player, yValue: 0 };
    })
    .sort((a, b) => b.yValue - a.yValue);

  return winsArray;
}
