import videoGameOSTPicks from "../../matchUpData/videoGameOSTPicks";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTPicks),
  };
}
