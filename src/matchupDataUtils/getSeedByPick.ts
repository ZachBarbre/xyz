import { Pick } from "./dataTypes";

export function getSeedByPick(pick: string, picks: Pick[]) {
  return picks.filter((pickObj) => pickObj.pick === pick)[0].seed;
}
