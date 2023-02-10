import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick, YObject } from "./dataTypes";
import { getBarChartArray } from "./getBarChartArray";

export function getVotesByPlayer(picks: Pick[], matchups: object[]) {
  const voteWinsObj = matchups.reduce<YObject>((voteObj, matchup: Matchup) => {
    const winningPlayer = getPlayerByPick(matchup.winner, picks);
    if (!voteObj.hasOwnProperty(winningPlayer)) {
      return { ...voteObj, [winningPlayer]: matchup.winVotes };
    }
    return {
      ...voteObj,
      [winningPlayer]: voteObj[winningPlayer] + matchup.winVotes,
    };
  }, {});
  const voteObj = matchups.reduce<YObject>(
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

  const winsArray = getBarChartArray(picks, voteObj);

  return winsArray;
}
