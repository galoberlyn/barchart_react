import Bar from './Bar';
import Chart from './Chart';
import YAxis from '../Graph/YAxis';
import Input from '../Input';
import { useAdjustBarHeight, useManipulateYAxis } from '../hooks/useManipulateValues';
import { CONSTANTS, SampleDataTypes } from './constants';
import BarLabel from './BarLabel';

const BarChart = () => {

  const xAxis = CONSTANTS.BAR_WIDTH + CONSTANTS.BAR_DISTANCE;
  const { yAxisMaxValue, yAxisHalfValue, manipulateYAxis } = useManipulateYAxis();
  const { 
    sampleData,
    handleManipulateBarValue,
    handleOnMouseMove,
    setIsDragging,
  } = useAdjustBarHeight();
  
  return (
    <>
      <Input manipulateYAxis={manipulateYAxis} yAxisMaxValue={yAxisMaxValue} />
      <div className="center-screen">
        <YAxis yAxisMaxValue={yAxisMaxValue} yAxisHalfValue={yAxisHalfValue} />
          <div className="bar-chart">
            <Chart width={sampleData.length * xAxis} height={yAxisMaxValue < 300 ? 300 : yAxisMaxValue}>
              {sampleData.map((datum: SampleDataTypes, index: number) => (
                <>
                  <BarLabel
                    handleOnMouseMove={handleOnMouseMove}
                    setIsDragging={setIsDragging}
                    key={`${datum.name}${index}`}
                    index={index}
                    x={index * xAxis}
                    y={yAxisMaxValue - (datum.repos + CONSTANTS.LABEL_MARGIN_BOTTOM )}
                    label={datum.repos}
                  />
                  <Bar
                    index={index}
                    handleOnMouseMove={handleOnMouseMove}
                    setIsDragging={setIsDragging}
                    key={datum.name}
                    x={index * xAxis}
                    y={yAxisMaxValue - datum.repos}
                    width={CONSTANTS.BAR_DISTANCE}
                    height={datum.repos}
                  />
                </>
                ))}
            </Chart>
          </div>
      </div>
    </>
  )
}


export default BarChart;