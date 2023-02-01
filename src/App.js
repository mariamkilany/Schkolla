import './App.css';
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Donut from './components/donutChart/Donut';
import Bar from './components/barChart/Bar';

function App() {
  return (
    <div className="App">
      <Register/>
      <Slider/>
      <Donut/>
      <Bar/>
    </div>
  );
}

export default App;
