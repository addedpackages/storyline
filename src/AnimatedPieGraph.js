import React, {useMemo} from 'react';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { motion, useAnimation } from 'framer-motion';
import { Text } from '@visx/text';
import { arc } from 'd3-shape'; 

const AnimatedPieGraph = ({ 
  width, 
  height, 
  data = [
  { value: 25, color: "#000000" },
  { value: 25, color: "#FFFFFF" },
  { value: 25, color: "#000000" },
  { value: 25, color: "#FFFFFF" }
], 
  duration=10,
  textColor="#FFFFFF" 
}) => {
  const animation = useAnimation();
  const legendAnimation = useAnimation();
  const colorScale = scaleOrdinal({
  domain: data.map(d => d.color),
  range: data.map(d => d.color),
});

  const radius = Math.min(width, height) / 2 - 50;
  const centerX = width / 2;
  const centerY = height / 2;

  const biggestValue = Math.max(...data.map(d => d.value));
  const centerText = biggestValue.toString() + '%';


  const chartContainerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const largestArc = useMemo(() => {
    const max = Math.max(...data.map(d => d.value));
    return data.find(d => d.value === max);
  }, [data]);

  const newArc = arc()
  .innerRadius(radius + 60)
  .outerRadius(radius + 60)
  .startAngle(0)
  .endAngle((Math.PI * 3) / 2);

  const ringRadius = radius + (radius * (1 - largestArc.value / 100));

  React.useEffect(() => {
    const updatePie = async () => {
      await animation.start({
        opacity: 1,
        transition: { duration }
      });
      await new Promise(resolve => setTimeout(resolve, 2000)); // Add a delay of 2 seconds
      await legendAnimation.start({
        opacity: 1,
        transition: { duration }
      });
    };
    updatePie();
  }, [animation, legendAnimation]);

  return (
    <div style={chartContainerStyle}>
      <svg width={"100%"} height={"100%"}>
        <rect x={0} y={0} width={"100%"} height={"100%"} fill="url(#animated-background)" />
        <Group transform={`translate(50, 200)`}>
          <Group top={-100}>
            <motion.g animate={legendAnimation} initial={{ opacity: 0 }}>
              {data.map((d, index) => (
                <Group key={`legend-${index}`} transform={`translate(${index * 180}, 0)`} >
                  <rect width={20} height={20} fill={d.color} />
                  <Text
                    dx={25}
                    dy={15}
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    fontSize={20}
                    fill={d.color}
                  >
                    {d.label}
                  </Text>
                </Group>
              ))}
            </motion.g>
          </Group>
  
          <Group left={centerX + 70} top={centerY}>
            <motion.g animate={animation}>
              <Pie
                data={data}
                pieValue={d => d.value}
                outerRadius={radius}
                innerRadius={radius + 50}
                cornerRadius={3}
                padAngle={0.005}
                colors={d => colorScale(d.color)}
              >
                {pie => (
                  <g>
                    {pie.arcs.map((arc, index) => (
                      <motion.path
                        key={data[index].color}
                        d={pie.path(arc)}
                        fill={data[index].color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                      />
                    ))}
                    <motion.path
                      key="largest-arc-ring"
                      d={newArc()}
                      stroke={"#cccccc"}
                      strokeWidth="20"
                      fill="#cccccc"
                      initial={{ opacity: 0, scale: .9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 5 }}
                    />
                  </g>
                )}
              </Pie>
            </motion.g>
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>
              <Text
                textAnchor="middle"
                verticalAnchor="middle"
                fontFamily="sans-serif"
                fontSize={50}
                fontWeight="bold"
                fill={textColor}
                x={centerX - 200}
                y={centerY - 150}
              >
                {centerText}
              </Text>
            </motion.g>
          </Group>
        </Group>
      </svg>
    </div>
  );
};

export default AnimatedPieGraph;
