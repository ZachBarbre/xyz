import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick, YObject } from "./dataTypes";
import { getBarChartArray } from "./getBarChartArray";

export function getOneVoteByPlayer(
  picks: Pick[],
  matchups: object[],
  winLoss: "winner" | "loser"
) {
  const winsObj = matchups.reduce<YObject>((winObj, matchup: Matchup) => {
    if (matchup.winVotes - matchup.lossVotes === 1) {
      const player = getPlayerByPick(matchup[winLoss], picks);
      if (!winObj.hasOwnProperty(player)) {
        return { ...winObj, [player]: 1 };
      }
      return { ...winObj, [player]: winObj[player] + 1 };
    }
    return { ...winObj };
  }, {});

  const winsArray = getBarChartArray(picks, winsObj);

  return winsArray;
}
