import videoGameOSTMatchups from "../../matchUpData/videoGameOSTMatchups";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTMatchups),
  };
}
