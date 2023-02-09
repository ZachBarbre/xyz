import { getPlayerByPick } from "./getPlayerByPicks";
import { Matchup, Pick } from "./dataTypes";

export function getOneVoteWinsByPlayer(picks: Pick[], matchups: object[]) {
  const winsObj = matchups.reduce((winObj, matchup: Matchup) => {
    if (matchup.winVotes - matchup.lossVotes === 1) {
      const player = getPlayerByPick(matchup.winner, picks);
      if (!winObj.hasOwnProperty(player)) {
        return { ...winObj, [player]: 1 };
      }
      return { ...winObj, [player]: winObj[player] + 1 };
    }
    return { ...winObj };
  }, {});

  const playerSet = new Set();
  picks.forEach((pick) => playerSet.add(pick.player));
  const playerArray = Array.from(playerSet) as string[];
  const playersWithWins = Object.keys(winsObj);

  const winsArray = playerArray
    .map((player) => {
      if (playersWithWins.includes(player)) {
        return { player: player, yValue: winsObj[player] };
      }
      return { player: player, yValue: 0 };
    })
    .sort((a, b) => b.yValue - a.yValue);

  return winsArray;
}
