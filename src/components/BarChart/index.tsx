import Bar from './Bar';
import Chart from './Chart';
import YAxis from '../Graph/YAxis';
import Input from '../Input';
import { useManipulateYAxis } from '../hooks/useManipulateValues';
import { data, CONSTANTS } from './constants';

const BarChart = () => {

  const xAxis = CONSTANTS.BAR_WIDTH + CONSTANTS.BAR_DISTANCE;
  const { yAxisMaxValue, yAxisHalfValue, manipulateYAxis } = useManipulateYAxis();

  return (
    <>
      <Input manipulateYAxis={manipulateYAxis} yAxisMaxValue={yAxisMaxValue} />
      <div className="center-screen">
        <YAxis yAxisMaxValue={yAxisMaxValue} yAxisHalfValue={yAxisHalfValue} />
          <div className="bar-chart">
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
          </div>
      </div>
    </>
  )
}


export default BarChart;