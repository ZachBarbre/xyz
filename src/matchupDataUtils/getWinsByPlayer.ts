import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick, YObject } from "./dataTypes";
import { getBarChartArray } from "./getBarChartArray";

export function getWinsByPlayer(picks: Pick[], matchups: object[]) {
  const winsObj = matchups.reduce<YObject>((winObj, matchup: Matchup) => {
    const player = getPlayerByPick(matchup.winner, picks);
    if (!winObj.hasOwnProperty(player)) {
      return { ...winObj, [player]: 1 };
    }
    return { ...winObj, [player]: winObj[player] + 1 };
  }, {});

  const winsArray = getBarChartArray(picks, winsObj);

  return winsArray;
}
