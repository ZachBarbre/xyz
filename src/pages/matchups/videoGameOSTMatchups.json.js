import videoGameOSTMatchups from "./videoGameOSTMatchups.json";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTMatchups),
  };
}
