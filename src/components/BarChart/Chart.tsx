type ChartTypes = {
    width: string | number;
    height: string | number;
    children: any;
}

const Chart = (props: ChartTypes) => {
  const { width, height, children } = props;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {children}
    </svg>
  );
};

export default Chart;
