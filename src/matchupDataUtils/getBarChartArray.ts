import { Pick } from "./dataTypes";

interface YObject {
  [key: string]: number;
}

export function getBarChartArray(picks: Pick[], yObject: YObject) {
  const playerSet = new Set();
  picks.forEach((pick) => playerSet.add(pick.player));
  const playerArray = Array.from(playerSet) as string[];
  const playersWithWins = Object.keys(yObject);

  const winsArray = playerArray
    .map((player) => {
      if (playersWithWins.includes(player)) {
        return { xValue: player, yValue: yObject[player] };
      }
      return { xValue: player, yValue: 0 };
    })
    .sort((a, b) => b.yValue - a.yValue);

  return winsArray;
}
