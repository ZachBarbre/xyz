import { Pick } from "./dataTypes";

export function getPlayerByPick(pick: string, picks: Pick[]) {
  console.log("🚀 ~ file: getPlayerByPicks.ts:4 ~ getPlayerByPick ~ pick:", pick)
  return picks.filter((pickObj) => pickObj.pick === pick)[0].player;
}
