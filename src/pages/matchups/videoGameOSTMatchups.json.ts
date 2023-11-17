import videoGameOSTMatchups from "../../matchUpData/videoGameOSTMatchups";

export async function GET() {
  return new Response(
    JSON.stringify({
      body: JSON.stringify(videoGameOSTMatchups),
    }),
  );
}
