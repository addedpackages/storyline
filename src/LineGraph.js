import React from 'react';
import { scaleLinear, scaleTime } from '@visx/scale';
import { Line } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';

const LineGraph = ({ width, height, data }) => {
  
  // Set up scales for x and y axes
  const xScale = scaleTime({
    domain: [new Date(data[0].date), new Date(data[data.length - 1].date)] ,
    range: [0, width],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.value))],
    range: [height, 0],
    nice: true
  });

  // Define the path for the line
  const linePath = React.useMemo(() => {
    const path = data.reduce((acc, d, i) => {
      const x = xScale(new Date(d.date));
      const y = yScale(d.value);
      return `${acc} ${i === 0 ? 'M' : 'L'} ${x},${y}`;
    }, '');
    return `${path} Z`;
  }, [data, xScale, yScale]);

  return (
    <svg width={width} height={height}>
      {/* x-axis */}
      <AxisBottom
        top={height}
        scale={xScale}
        numTicks={width > 520 ? 10 : 5}
        tickFormat={date => date.toLocaleDateString()}
        tickLabelProps={() => ({ textAnchor: 'middle', fontSize: 10 })}
      />
      
      {/* y-axis */}
      <AxisLeft
        scale={yScale}
        numTicks={5}
        tickLabelProps={() => ({ dx: '-0.25em', dy: '0.25em', fontSize: 10, textAnchor: 'end' })}
      />

      {/* line */}
      <Line
        from={{ x: 0, y: yScale(data[0].value) }}
        to={{ x: width, y: yScale(data[data.length - 1].value) }}
        stroke="#008080"
        strokeWidth={2}
      />

      {/* data points */}
      {data.map((d, i) => (
        <circle
          key={`circle-${i}`}
          cx={xScale(new Date(d.date))}
          cy={yScale(d.value)}
          r={4}
          fill="#008080"
        />
      ))}
    </svg>
  );
};

export default LineGraph;
