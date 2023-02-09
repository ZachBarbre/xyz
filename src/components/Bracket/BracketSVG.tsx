import { useMemo } from "react";
import { Group } from "@visx/group";
import { Tree, hierarchy } from "@visx/hierarchy";
import { LinkHorizontalStep } from "@visx/shape";
import { margin, lineTextColor } from "./index";
import { getMatchupHeight } from "./Matchup";
import { Matchup } from "./Matchup";

export function BracketSVG({
  data,
  parentWidth,
  setMatchupDetails,
}): JSX.Element {
  const width = parentWidth < 700 ? 700 : parentWidth;
  const height = width * 0.55;

  const xMax = width - margin.left - margin.right;
  const treeX = xMax / 2 - 50;
  const yMax = height - margin.top - margin.bottom;
  const linkHeight = getMatchupHeight(width);

  const leftData = useMemo(() => hierarchy(data[0]), []);
  const rightData = useMemo(() => hierarchy(data[1]), []);
  const getXLeft = (data) => width / 2 - data.y;
  const getY = (data) => {
    if (data.depth === 0) {
      if (data.data.side === "left") {
        return data.x - linkHeight * 2;
      }
      if (data.data.side === "right") {
        return data.x + linkHeight * 2;
      }
    }
    if (data.depth === 1) {
      if (data.parent.data.side === "left") {
        return data.x - linkHeight * 2;
      }
      if (data.parent.data.side === "right") {
        return data.x + linkHeight * 2;
      }
    }
    return data.x;
  };

  return (
    <svg width={width} height={height}>
      <rect fill="#052D3A" width={width} height={height} rx={10} />
      <Group top={margin.top} left={xMax - treeX - margin.right}>
        <Tree root={rightData} size={[yMax, treeX]}>
          {(tree) => (
            <Group>
              {tree.links().map((link, i) => (
                <LinkHorizontalStep
                  key={`right-${i}`}
                  data={link}
                  stroke={lineTextColor}
                  fill="none"
                  y={getY}
                />
              ))}
              {tree.descendants().map((matchup) => (
                <Matchup
                  key={`${matchup.data.round}-${matchup.data.matchup}`}
                  matchup={matchup}
                  svgWidth={width}
                  isLeft={false}
                  setMatchupDetails={setMatchupDetails}
                />
              ))}
            </Group>
          )}
        </Tree>
      </Group>
      <Group top={margin.top} left={0}>
        <Tree root={leftData} size={[yMax, treeX]}>
          {(tree) => (
            <Group>
              {tree.links().map((link, i) => (
                <LinkHorizontalStep
                  key={`right-${i}`}
                  data={link}
                  stroke={lineTextColor}
                  fill="none"
                  x={getXLeft}
                  y={getY}
                />
              ))}
              {tree.descendants().map((matchup) => (
                <Matchup
                  key={`${matchup.data.round}-${matchup.data.matchup}`}
                  matchup={matchup}
                  svgWidth={width}
                  isLeft={true}
                  setMatchupDetails={setMatchupDetails}
                />
              ))}
            </Group>
          )}
        </Tree>
      </Group>
    </svg>
  );
}
