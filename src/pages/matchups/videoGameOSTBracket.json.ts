import videoGameOSTBracket from "../../matchUpData/videoGameOSTBracket";

export async function GET() {
  return new Response(
    JSON.stringify({
      body: JSON.stringify(videoGameOSTBracket),
    }),
  );
}
