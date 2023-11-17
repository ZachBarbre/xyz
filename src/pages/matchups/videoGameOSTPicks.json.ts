import videoGameOSTPicks from "../../matchUpData/videoGameOSTPicks";

export async function GET() {
  return new Response(
    JSON.stringify({
      body: JSON.stringify(videoGameOSTPicks),
    }),
  );
}
