import './App.css';
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Donut from './components/donutChart/Donut';
import Bar from './components/barChart/Bar';
import AddLevel from './components/addLevel/AddLevel';

function App() {
  return (
    <div className="App">
      {/* <Register/>
      <Slider/>
      <Donut/>
      <Bar/> */}
      <AddLevel/>
    </div>
  );
}

export default App;
