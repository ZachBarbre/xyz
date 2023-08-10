import { Pick } from "./dataTypes";

export function getPlayerByPick(pick: string, picks: Pick[]) {
  const pickData =  picks.filter((pickObj) => pickObj.pick === pick)
  if (!pickData[0]) {
    console.error("error with pick", pick)
    return 'ERROR'
  }
  return pickData[0].player;
}
