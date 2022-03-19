import { useSustainGraphHeight } from '../hooks/useManipulateValues';

type BarTypes = {
  x: string | number;
  index: number;
  y: string | number;
  width: string | number;
  height: string | number;
  setIsDragging: (b: boolean) => void;
  handleOnMouseMove: (i: number, e: any) => void;
  customCursor?: string;
}

const Bar = (props: BarTypes) => {
  const { 
    x,
    index,
    y,
    width,
    height,
    setIsDragging,
    handleOnMouseMove,
    customCursor
  } = props;

  const { yAxisFinalValue } = useSustainGraphHeight(height);

  return (
    <g 
      style={{ fontSize: 12, cursor: customCursor ? customCursor : 'pointer', userSelect: 'none' }}
      onMouseDown={() => {
        setIsDragging(true);
      }}
      onMouseMove={e => handleOnMouseMove(index, e)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <rect x={x} y={y} width={width} height={height} />
    </g>
  )
}

export default Bar;