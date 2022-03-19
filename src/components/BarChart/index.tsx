import Bar from './Bar';
import Chart from './Chart';
import YAxis from '../Graph/YAxis';
import XAxis from '../Graph/XAxis';
import Input from '../Input';
import { useAdjustBarHeight, useManipulateYAxis } from '../hooks/useManipulateValues';
import { CONSTANTS, SampleDataTypes } from './constants';
import BarLabel from './BarLabel';

const BarChart = () => {

  const { yAxisMaxValue, yAxisHalfValue, manipulateYAxis } = useManipulateYAxis();
  const { 
    sampleData,
    handleOnMouseMove,
    setIsDragging,
  } = useAdjustBarHeight();
  
  return (
    <div className="bar-chart-root">
      <Input manipulateYAxis={manipulateYAxis} yAxisMaxValue={yAxisMaxValue} />
      <div className="center-screen">
        <YAxis yAxisMaxValue={yAxisMaxValue} yAxisHalfValue={yAxisHalfValue} />
          <div className="bar-chart">
            <Chart width={sampleData.length * CONSTANTS.X_AXIS_DISTANCE} height={yAxisMaxValue < 300 ? 300 : yAxisMaxValue}>
              {sampleData.map((datum: SampleDataTypes, index: number) => (
                <>
                  <BarLabel
                    handleOnMouseMove={handleOnMouseMove}
                    setIsDragging={setIsDragging}
                    key={`${datum.name}${index}`}
                    index={index}
                    x={index * CONSTANTS.X_AXIS_DISTANCE}
                    y={yAxisMaxValue - (datum.repos + CONSTANTS.LABEL_MARGIN_BOTTOM )}
                    label={datum.repos}
                  />
                  <Bar
                    index={CONSTANTS.X_AXIS_DISTANCE}
                    handleOnMouseMove={handleOnMouseMove}
                    setIsDragging={setIsDragging}
                    key={datum.name}
                    x={index * CONSTANTS.X_AXIS_DISTANCE}
                    y={yAxisMaxValue - datum.repos}
                    width={CONSTANTS.BAR_DISTANCE}
                    height={datum.repos}
                  />
                </>
                ))}
            <XAxis 
              xAxisMaxValue={sampleData.length * CONSTANTS.X_AXIS_DISTANCE} 
              yAxisMaxValue={yAxisMaxValue}
            />
            </Chart>
          </div>
      </div>
    </div>
  )
}


export default BarChart;