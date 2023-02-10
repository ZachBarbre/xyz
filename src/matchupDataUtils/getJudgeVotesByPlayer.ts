import { Matchup, Pick, YObject } from "./dataTypes";
import { getBarChartArray } from "./getBarChartArray";
import { getPlayerByPick } from "./getPlayerByPicks";

export function getJudgeVotesByPlayer(
  picks: Pick[],
  matchups: object[],
  winLoss: "winner" | "loser"
) {
  const votesObj = matchups.reduce<YObject>((voteObj, matchup: Matchup) => {
    if (matchup.judgeVote) {
      const player = getPlayerByPick(matchup[winLoss], picks);
      if (!voteObj.hasOwnProperty(player)) {
        return { ...voteObj, [player]: 1 };
      }
      return { ...voteObj, [player]: voteObj[player] + 1 };
    }
    return { ...voteObj };
  }, {});

  const votesArray = getBarChartArray(picks, votesObj);

  return votesArray;
}
