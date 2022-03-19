import Bar from '../BarChart/Bar';
import Chart from '../BarChart/Chart';

type XAxisTypes = {
    xAxisMaxValue: number;
    yAxisMaxValue: number;
}

const XAxis = (props: XAxisTypes) => {

  const { xAxisMaxValue, yAxisMaxValue } = props;

  return (
    <Bar
      index={-1}
      setIsDragging={() => null}
      handleOnMouseMove={() => null}
      x={0}
      y={yAxisMaxValue - 5}
      width={xAxisMaxValue}
      height={5}
      customCursor={'unset'}
    />
  );
}

export default XAxis;