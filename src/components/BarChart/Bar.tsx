import { GlobalState } from '../context/global';

type BarTypes = {
  x: string | number;
  index: number;
  y: string | number;
  width: string | number;
  height: string | number;
  setIsDragging: (b: boolean) => void;
  handleOnMouseMove: (i: number, e: any, yMax: number) => void;
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
  

  return (
    <GlobalState.Consumer>
      {({ yMax }) => (
        <g 
          style={{ fontSize: 12, cursor: customCursor ? customCursor : 'pointer', userSelect: 'none' }}
          onMouseDown={() => {
            setIsDragging(true);
          }}
          onMouseMove={e => handleOnMouseMove(index, e, yMax)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          >
          <rect x={x} y={y} width={width} height={height} />
        </g>
      )
      }
    </GlobalState.Consumer>
  )
}

export default Bar;