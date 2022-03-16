type BarTypes = {
  x: string | number;
  y: string | number;
  width: string | number;
  height: string | number;
}

const Bar = (props: BarTypes) => {
  const { x, y, width, height } = props;

  return (
    <rect x={x} y={y} width={width} height={height} />
  )
}

export default Bar;