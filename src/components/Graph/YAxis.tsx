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
      <div className="y-axis-labels" style={{ minHeight: `${yAxisMaxValue}px`, marginRight: 5 }}>
        <span>{yAxisMaxValue}</span>
        <span style={{ lineHeight: `${yAxisMaxValue}px` }}>{yAxisHalfValue}</span>
        <span>0</span>
      </div>
      <Chart width={10} height={yAxisMaxValue}>
        <Bar
          index={-1}
          setIsDragging={() => null}
          handleOnMouseMove={() => null}
          x={0}
          y={0}
          width={5}
          height={yAxisMaxValue}
        />
      </Chart>
    </>
  )
}

export default YAxis;