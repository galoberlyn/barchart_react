import { useState } from 'react';
import { CONSTANTS } from '../BarChart/constants';

export const useManipulateYAxis = () => {
  const [yAxisMaxValue, setYAxisMaxValue] = useState<number>(CONSTANTS.MAX_BAR_HEIGHT);
  const [yAxisPrevious, setYAxisPrevious] = useState<number>(CONSTANTS.MAX_BAR_HEIGHT);
  const [yAxisHalfValue, setYAxisHalfValue] = useState<number>(CONSTANTS.MAX_BAR_HEIGHT/2);

  const manipulateYAxis = (e: any) => {
    if (isNaN(e)) {
      alert('Invalid value');
      return;
    } 
    setYAxisPrevious(yAxisMaxValue);
    setYAxisMaxValue(e);
    setYAxisHalfValue(e/2);
  }


  return { yAxisMaxValue, setYAxisMaxValue, yAxisHalfValue, manipulateYAxis, yAxisPrevious };
}