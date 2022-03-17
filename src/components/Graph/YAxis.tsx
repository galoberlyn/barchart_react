import Bar from '../BarChart/Bar';
import Chart from '../BarChart/Chart';

type YAxisTypes = {
  yAxisMaxValue: number;
  yAxisHalfValue: number;
} 

const YAxis = (props: YAxisTypes) => {

  const { yAxisMaxValue, yAxisHalfValue } = props;

  return (
    <>
      <div className="y-axis-labels" style={{ minHeight: `${yAxisMaxValue}px`}}>
        <span>{yAxisMaxValue}</span>
        <span style={{ lineHeight: `${yAxisMaxValue}px` }}>{yAxisHalfValue}</span>
        <span>0</span>
      </div>
      <Chart width={5} height={yAxisMaxValue}>
        <Bar
          x={0}
          // y={CONSTANTS.MAX_BAR_HEIGHT - datum.repos}
          y={0}
          width={5}
          height={yAxisMaxValue}
        />
      </Chart>
    </>
  )
}

export default YAxis;