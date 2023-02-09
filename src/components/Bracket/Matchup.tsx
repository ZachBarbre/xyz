import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import { BracketMatchup } from "../../matchupDataUtils/dataTypes";
import { lineTextColor } from "./index";

export interface MatchupProps {
  matchup: HierarchyPointNode<TreeNode>;
  svgWidth: number;
  isLeft: boolean;
  setMatchupDetails: CallableFunction;
}

export interface TreeNode extends BracketMatchup {
  children?: this[];
}

const getFinalMatchupTop = (x: number, height: number, isLeft: boolean) => {
  // return x;
  if (isLeft) {
    return x - height * 2;
  }
  return x + height * 2;
};

const getMatchupWidth = (svgWidth) => {
  if (svgWidth <= 510) return 30;
  if (svgWidth <= 700) return 40;
  if (svgWidth <= 920) return 60;
  return 80;
};

export const getMatchupHeight = (svgWidth) => {
  if (svgWidth <= 920) return 20;
  return 40;
};

export const getSingleLineSeedText = ({
  seeds,
  pick1Seed,
  pick2Seed,
}: TreeNode) => {
  if (seeds?.length > 1) {
    return `${seeds[0]} vs ${seeds[1]}`;
  }
  if (seeds?.length === 1) {
    return `${seeds[0]} vs ${pick2Seed ?? "-"}`;
  }
  if (pick1Seed || pick2Seed) {
    return `${pick1Seed ?? "-"} vs ${pick2Seed ?? "-"}`;
  }
  return "";
};

export function Matchup({
  matchup,
  svgWidth,
  isLeft,
  setMatchupDetails,
}: MatchupProps): JSX.Element {
  const width = getMatchupWidth(svgWidth);
  const height = getMatchupHeight(svgWidth);
  const fontSize = 10;

  const centerX = -width / 2;
  const centerY = -height / 2;
  const groupLeft = isLeft ? svgWidth / 2 - matchup.y : matchup.y;
  const groupTop =
    matchup.depth === 0 || matchup.depth === 1
      ? getFinalMatchupTop(matchup.x, height, isLeft)
      : matchup.x;
  return (
    <Group top={groupTop} left={groupLeft}>
      <rect
        style={{ cursor: "pointer" }}
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        rx={10}
        fill="#1095c1"
        stroke="#11191f"
        strokeWidth={1}
        onClick={() => {
          setMatchupDetails(matchup.data);
        }}
      />
      {height < 40 ? (
        <>
          <text
            dy="0.33em"
            fontSize={fontSize}
            textAnchor="middle"
            fill={lineTextColor}
            style={{ pointerEvents: "none" }}
          >
            {getSingleLineSeedText(matchup.data)}
          </text>
        </>
      ) : (
        <>
          (
          <text
            dy="-0.7em"
            fontSize={fontSize}
            textAnchor="middle"
            fill={lineTextColor}
            style={{ pointerEvents: "none" }}
          >
            {matchup.data.player1}
          </text>
          <text
            dy="1.1em"
            fontSize={fontSize}
            textAnchor="middle"
            fill={lineTextColor}
            style={{ pointerEvents: "none" }}
          >
            {matchup.data.player2}
          </text>
          )
        </>
      )}
    </Group>
  );
}
