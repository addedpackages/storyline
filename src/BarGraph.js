import React from 'react';
import { animated, useSpring } from 'react-spring';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';

const AnimatedBarGraph = ({ width, height, data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'C', value: 30 }
] }) => {
  // Sort the data by category
  const sortedData = React.useMemo(() => [...data].sort((a, b) => a.category.localeCompare(b.category)), [data]);

  // Set up scales for x and y axes
  const xScale = React.useMemo(() => scaleBand({
    domain: sortedData.map(d => d.category),
    range: [0, width],
    padding: 0.2
  }), [sortedData, width]);

  const yScale = React.useMemo(() => scaleLinear({
    domain: [0, Math.max(...sortedData.map(d => d.value))],
    range: [height, 0],
    nice: true
  }), [sortedData, height]);

  // Calculate bar width and height
  const barWidth = xScale.bandwidth();

  // Define the animated style for all bars
  const animatedStyle = useSpring({
    from: { height: 0 },
    to: { height: height - yScale(sortedData[sortedData.length - 1].value) },
    delay: 0,
    config: { duration: 1000 }
  });

  // Render the bars using the same animation
  return (
    <svg width={width} height={height}>
      {/* x-axis labels */}
      <g>
        {sortedData.map((d, i) => (
          <text
            key={`x-label-${i}`}
            x={xScale(d.category) + barWidth / 2}
            y={height + 15}
            textAnchor="middle"
          >
            {d.category}
          </text>
        ))}
      </g>

      {/* y-axis labels */}
      <g>
        {yScale.ticks().map((tickValue, i) => (
          <g key={`y-label-${i}`}>
            <text
              x={-300}
              y={yScale(tickValue) + 30}
              textAnchor="end"
              fill="#333"
              fontSize={10}
              dy=".32em"
            >
              {tickValue}
            </text>
            <line
              x1={-25}
              y1={yScale(tickValue)}
              x2={width}
              y2={yScale(tickValue)}
              stroke="#999"
            />
          </g>
        ))}
      </g>

      <g>
        {sortedData.map((d, i) => (
          <animated.rect
            key={d.category}
            x={xScale(d.category)}
            y={yScale(d.value)}
            width={barWidth}
            style={animatedStyle}
            fill="#008080"
          />
        ))}
      </g>
    </svg>
  );
};

export default AnimatedBarGraph;
