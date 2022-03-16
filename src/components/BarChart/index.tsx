import Bar from './Bar';
import Chart from './Chart';
import { data, CONSTANTS } from './constants';

const BarChart = () => {

  const xAxis = CONSTANTS.BAR_WIDTH + CONSTANTS.BAR_DISTANCE;

  return (
    <Chart width={data.length * xAxis} height={CONSTANTS.MAX_BAR_HEIGHT}>
      {data.map((datum, index) => (
        <Bar
          key={datum.name}
          x={index * xAxis}
          y={CONSTANTS.MAX_BAR_HEIGHT - datum.repos}
          width={CONSTANTS.BAR_DISTANCE}
          height={datum.repos}
        />
      ))}
    </Chart>
  )
}


export default BarChart;