import { useState } from 'react';
import { CONSTANTS, SampleDataTypes } from '../BarChart/constants';

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

export const useAdjustBarHeight = () => {

  const [sampleData, setData] = useState<SampleDataTypes[]>([
    {
      name: 'galoberlyn',
      repos: 150
    },
    {
      name: 'test',
      repos: 43
    },
    {
      name: 'test2',
      repos: 56
    },
    {
      name: 'test3',
      repos: 82
    },
    {
      name: 'test4',
      repos: 0
    }
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [initialPos, setInitialPos] = useState(0);

  const handleOnMouseMove = (index: number, e: any) => {
    if (isDragging) {
      if (initialPos > e.clientY) {
        handleManipulateBarValue(index, 'add');
      } else {
        handleManipulateBarValue(index, 'subtract');
      }
      setInitialPos(e.clientY);
      return;
    }
    setInitialPos(e.clientY);
  }

  const handleManipulateBarValue = (index: number, type: 'add' | 'subtract') => {
    const dataContainer: SampleDataTypes[] = JSON.parse(JSON.stringify(sampleData));
    type === 'add' ? dataContainer[index].repos++ : dataContainer[index].repos--;  
    setData(dataContainer);    
  } 

  return { sampleData, handleManipulateBarValue, handleOnMouseMove, setIsDragging };

}