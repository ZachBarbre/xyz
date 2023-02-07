import { useMemo } from "react";
import { Group } from "@visx/group";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { ParentSize } from "@visx/responsive";

export interface BarData {
  player: string;
  yValue: number;
}
export interface BarProps {
  data: BarData[];
}

export interface BarSVGProps {
  data: BarData[];
  parentWidth: number;
}

const margin = { top: 20, bottom: 60, left: 30, right: 20 };

export function BarChart({ data }: BarProps) {
  return (
    <ParentSize>
      {({ width }) => <BarChartSVG data={data} parentWidth={width} />}
    </ParentSize>
  );
}

function BarChartSVG({ data, parentWidth }: BarSVGProps) {
  const width = parentWidth < 500 ? parentWidth : 500;
  const height = width * 0.8;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const lineTextColor = "#c2c9ce";

  const getPlayer = (d: BarData) => d.player;
  const getWins = (d: BarData) => d.yValue;

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
        domain: [0, Math.round(Math.max(...data.map(getWins)))],
        nice: true,
      }),
    [yMax]
  );

  return (
    <svg width={width} height={height}>
      <rect fill="#052D3A" width={width} height={height} rx={10} />
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
              fill="#1095c1"
            />
          );
        })}
        <AxisBottom
          top={yMax}
          scale={xScale}
          stroke={lineTextColor}
          tickStroke={lineTextColor}
          tickLabelProps={() => ({
            fill: lineTextColor,
            fontSize: 11,
            textAnchor: "start",
            angle: 45,
          })}
        />
        <AxisLeft
          scale={yScale}
          stroke={lineTextColor}
          tickStroke={lineTextColor}
          tickLabelProps={() => ({
            fill: lineTextColor,
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
