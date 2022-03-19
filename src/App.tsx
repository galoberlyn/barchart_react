import './App.css';
import './assets/styles.css';
import BarChart from './components/BarChart';
import { GlobalState } from './components/context/global';
import { useManipulateYAxis } from './components/hooks/useManipulateValues';

const App = () => {
  const { yAxisMaxValue } = useManipulateYAxis();

  return (
  <GlobalState.Provider value={{yMax: yAxisMaxValue}}>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <BarChart />
        </div>
        <div className="col-6">
          <BarChart />
        </div>
      </div>
    </div>
  </GlobalState.Provider>
  )
}

export default App;
