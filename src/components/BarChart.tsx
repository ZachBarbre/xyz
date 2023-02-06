import { useMemo } from "react";
import { Group } from "@visx/group";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";

interface BarData {
  player: string;
  wins: number;
}
interface BarProps {
  data: BarData[];
}

const margin = { top: 20, bottom: 40, left: 20, right: 10 };

export function BarChart({ data }: BarProps) {
  const width = 530;
  const height = 500;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const getPlayer = (d: BarData) => d.player;
  const getWins = (d: BarData) => d.wins;

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        domain: data.map(getPlayer),
        padding: 0.25,
      }),
    [xMax]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, Math.max(...data.map(getWins))],
      }),
    [yMax]
  );

  return (
    <svg width={width} height={height}>
      <rect fill="#04002b" width={width} height={height} rx={10} />
      <Group left={margin.left} top={margin.top}>
        <GridRows scale={yScale} width={xMax} height={yMax} />
        {data.map((d) => {
          const barHeight = yMax - yScale(getWins(d));
          return (
            <Bar
              key={d.player}
              y={yMax - barHeight}
              x={xScale(getPlayer(d))}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="steelblue"
            />
          );
        })}
        <AxisBottom
          top={yMax}
          scale={xScale}
          stroke="white"
          tickStroke="white"
          tickLabelProps={() => ({
            fill: "white",
            fontSize: 11,
            textAnchor: "middle",
          })}
        />
        <AxisLeft
          scale={yScale}
          stroke="white"
          tickStroke="white"
          tickLabelProps={() => ({
            fill: "white",
            fontSize: 11,
            textAnchor: "end",
            dx: "-0.25em",
            dy: "0.25em",
          })}
        />
      </Group>
    </svg>
  );
}
