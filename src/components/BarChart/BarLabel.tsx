type BarLabelTypes = {
  x: number;
  y: number;
  label: string | number;
  index: number;
  setIsDragging: (b: boolean) => void;
  handleOnMouseMove: (i: number, e: any) => void;
}

const BarLabel = (props: BarLabelTypes) => {

  const { label, setIsDragging, handleOnMouseMove, index } = props;

  return (
    <g 
      style={{ fontSize: 12, cursor: 'pointer', userSelect: 'none' }}
      onMouseDown={() => {
        setIsDragging(true);
      }}
      onMouseMove={e => handleOnMouseMove(index, e)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <text {...props} >
        {label} &#x25A0;
      </text>
    </g>
  )
}



export default BarLabel;