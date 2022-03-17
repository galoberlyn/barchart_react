import { CONSTANTS, data } from '../BarChart/constants';

const XAxis = () => {

  const xAxis = CONSTANTS.BAR_WIDTH + CONSTANTS.BAR_DISTANCE;
  
  return (
    <div className="x-axis">
      <svg viewBox={`0 0 5 5`} width={data.length * xAxis} height={5} style={{ background: 'blue' }}>
        <rect x="0" y={CONSTANTS.MAX_BAR_HEIGHT} width={xAxis} height={5} />
      </svg>
    </div>
  )
}


export default XAxis;