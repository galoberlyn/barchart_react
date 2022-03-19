
type InputTypes = {
  manipulateYAxis: (e: any) => void;
  yAxisMaxValue: number;
  maxValue: number;
}
const Input = (props: InputTypes) => {
  const { yAxisMaxValue, manipulateYAxis, maxValue } = props;

  const validateValue = (value: any) => {
    if (value < maxValue) {
      alert('Cannot set value less than a maximum value of the bar below');
      return;
    }
    manipulateYAxis(value);
  }
  
  return (
    <div className="input">
      Y-Axis max:&nbsp;
      <input 
        type="number" 
        value={yAxisMaxValue} 
        onChange={e => validateValue(e.target.value)} />
    </div>
  )
}


export default Input;