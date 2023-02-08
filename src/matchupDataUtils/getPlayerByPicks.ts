import { Pick } from "./dataTypes";

export function getPlayerByPick(pick: string, picks: Pick[]) {
  return picks.filter((pickObj) => pickObj.pick === pick)[0].player;
}
