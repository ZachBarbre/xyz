import { Group } from "@visx/group";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Bar } from "@visx/shape";

interface BarData {
  player: string;
  wins: number;
}
interface BarProps {
  data: BarData[];
}

const margin = { top: 20, bottom: 20, left: 20, right: 20 };

export function BarChart({ data }: BarProps) {
  console.log("🚀 ~ file: BarChart.tsx:16 ~ BarChart ~ data", data);
  const width = 500;
  const height = 500;

  const xMax = width;
  const yMax = height - margin.top - margin.bottom;

  const getPlayer = (d: BarData) => d.player;
  const getWins = (d: BarData) => d.wins;

  console.log("🚀 ~ file: BarChart.tsx:27 ~ BarChart ~ scaleBand", scaleBand);
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(getPlayer),
    padding: 0.5,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, Math.max(...data.map(getWins))],
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top}>
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
      </Group>
    </svg>
  );
}
