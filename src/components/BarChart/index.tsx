import { useMemo, MouseEvent } from "react";
import { Group } from "@visx/group";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { ParentSize } from "@visx/responsive";
import { TooltipWithBounds, useTooltip, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import styles from "./BarChart.module.css";

export interface BarData {
  xValue: string;
  yValue: number;
}
export interface BarProps {
  data: BarData[];
  ticks?: number;
  margin?: { top: number; bottom: number; left: number; right: number };
}

export interface BarSVGProps extends BarProps {
  parentWidth: number;
}

const lineTextColor = "#c2c9ce";

function BarChartSVG({ data, parentWidth, ticks, margin }: BarSVGProps) {
  const width = parentWidth;
  // const width = parentWidth < 500 ? parentWidth : 500;
  const height = width * 0.8;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip({});

  const getPlayer = (d: BarData) => d.xValue;
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
        domain: [0, Math.round(Math.max(...data.map(getWins))) || 1],
        nice: true,
      }),
    [yMax]
  );

  const handleMouseOver = (
    evt: MouseEvent,
    datum: { yValue: number; xValue: string }
  ) => {
    const coords = localPoint(evt);
    showTooltip({
      tooltipData: `${datum.xValue} - ${datum.yValue}`,
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
    });
  };
  const handleMouseOut = () => {
    hideTooltip();
  };

  return (
    <>
      <svg width={width} height={height}>
        <rect fill="#052D3A" width={width} height={height} rx={10} />
        <Group left={margin.left} top={margin.top}>
          <GridRows
            scale={yScale}
            width={xMax}
            height={yMax}
            numTicks={ticks}
          />
          {parentWidth !== 0 &&
            data.map((d) => {
              const barHeight = yMax - yScale(getWins(d));
              return (
                <Bar
                  key={d.xValue}
                  y={yMax - barHeight}
                  x={xScale(getPlayer(d))}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill="#1095c1"
                  onMouseMove={(evt) => handleMouseOver(evt, d)}
                  onMouseOut={handleMouseOut}
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
              fontSize: data.length > 10 ? 9 : 11,
              textAnchor: "start",
              angle: 45,
            })}
            numTicks={data.length}
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
            numTicks={ticks}
          />
        </Group>
      </svg>
      {tooltipOpen && (
        <TooltipWithBounds
          key={Math.random()}
          left={tooltipLeft}
          top={tooltipTop}
          style={{
            ...defaultStyles,
            backgroundColor: lineTextColor,
            color: "#11191f",
          }}
        >
          {String(tooltipData)}
        </TooltipWithBounds>
      )}
    </>
  );
}

export function BarChart({
  data,
  ticks = 10,
  margin = { top: 20, bottom: 60, left: 30, right: 20 },
}: BarProps) {
  return (
    <ParentSize className={styles.toolTipContainer}>
      {({ width }) => (
        <BarChartSVG
          data={data}
          parentWidth={width}
          ticks={ticks}
          margin={margin}
        />
      )}
    </ParentSize>
  );
}
