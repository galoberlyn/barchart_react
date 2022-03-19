import { GlobalState } from '../context/global';

type BarLabelTypes = {
  x: number;
  y: number;
  label: string | number;
  index: number;
  setIsDragging: (b: boolean) => void;
  handleOnMouseMove: (i: number, e: any, yMax: number) => void;
}

const BarLabel = (props: BarLabelTypes) => {

  const { label, setIsDragging, handleOnMouseMove, index } = props;

  return (
    <GlobalState.Consumer>
      {({ yMax }) => (
        <g 
          style={{ fontSize: 12, cursor: 'pointer', userSelect: 'none' }}
          onMouseDown={() => {
            setIsDragging(true);
          }}
          onMouseMove={e => handleOnMouseMove(index, e, yMax)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <text {...props} >
            {label} &#x25A0;
          </text>
        </g>
      )}
    </GlobalState.Consumer>
  )
}



export default BarLabel;