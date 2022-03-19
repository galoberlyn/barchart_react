import './App.css';
import './assets/styles.css';
import BarChart from './components/BarChart';

const App = () => {
  return (
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
  )
}

export default App;
