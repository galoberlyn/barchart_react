import { useState, createContext } from 'react';
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

  const getSampleDataMaxValue = Math.max(...sampleData.map(data => data.repos));

  const [isDragging, setIsDragging] = useState(false);
  const [initialPos, setInitialPos] = useState(0);

  const handleOnMouseMove = (index: number, e: any, yMax: number) => {
    if (isDragging) {
      if (initialPos > e.clientY) {
        handleManipulateBarValue(index, 'add', yMax);
      } else {
        handleManipulateBarValue(index, 'subtract', yMax);
      }
      setInitialPos(e.clientY);
      return;
    }
    setInitialPos(e.clientY);
  }

  const handleManipulateBarValue = (index: number, type: 'add' | 'subtract', yMax: number) => {
    const dataContainer: SampleDataTypes[] = JSON.parse(JSON.stringify(sampleData));
    if (type === 'add') {
      if (dataContainer[index].repos > yMax) {
        alert('Cannot add more than max value of y axis');
        return;
      }
      dataContainer[index].repos++
    } else {
      if (dataContainer[index].repos === 0) {
        alert('Cannot have negative values');
        return;
      }
      dataContainer[index].repos--;  
    }
    setData(dataContainer);    
  } 

  return { sampleData, handleManipulateBarValue, handleOnMouseMove, setIsDragging, getSampleDataMaxValue };

}
