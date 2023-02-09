import videoGameOSTPicks from "./videoGameOSTPicks.json";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTPicks),
  };
}
