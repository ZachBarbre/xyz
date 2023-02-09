import videoGameOSTBracket from "../../matchUpData/videoGameOSTBracket";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTBracket),
  };
}
