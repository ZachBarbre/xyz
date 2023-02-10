import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick } from "./dataTypes";

export function getVotesByPick(picks: Pick[], matchups: object[]) {
  const voteWinsObj = matchups.reduce((voteObj, matchup: Matchup) => {
    const winningPick = matchup.winner;
    if (!voteObj.hasOwnProperty(winningPick)) {
      return { ...voteObj, [winningPick]: matchup.winVotes };
    }
    return {
      ...voteObj,
      [winningPick]: voteObj[winningPick] + matchup.winVotes,
    };
  }, {});
  const voteObj = matchups.reduce(
    (voteObj, matchup: Matchup) => {
      const losingPick = matchup.loser;

      if (!voteObj.hasOwnProperty(losingPick)) {
        return { ...voteObj, [losingPick]: matchup.lossVotes };
      }
      return {
        ...voteObj,
        [losingPick]: voteObj[losingPick] + matchup.lossVotes,
      };
    },
    { ...voteWinsObj }
  );

  const pickArray = Object.keys(voteObj);

  const winsArray = pickArray
    .map((pick) => ({ xValue: pick, yValue: voteObj[pick] }))
    .sort((a, b) => b.yValue - a.yValue);

  return winsArray;
}
