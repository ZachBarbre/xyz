import videoGameOSTBracket from "./videoGameOSTBracket.json";

export function get() {
  return {
    body: JSON.stringify(videoGameOSTBracket),
  };
}
