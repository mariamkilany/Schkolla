import './App.css';
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Donut from './components/donutChart/Donut';

function App() {
  return (
    <div className="App">
      <Register/>
      <Slider/>
      <Donut/>
    </div>
  );
}

export default App;
