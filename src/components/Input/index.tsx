
type InputTypes = {
  manipulateYAxis: (e: any) => void;
  yAxisMaxValue: number;
}
const Input = (props: InputTypes) => {
  const { yAxisMaxValue, manipulateYAxis } = props;
  
  return (
    <div className="input">
      Y-Axis max:&nbsp;
      <input 
        type="number" 
        value={yAxisMaxValue} 
        onChange={e => manipulateYAxis(e.target.value)} />
    </div>
  )
}


export default Input;