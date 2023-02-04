import './App.css';
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Donut from './components/donutChart/Donut';
import Bar from './components/barChart/Bar';
import AddLevel from './components/popupComponents/AddLevel';
import DeleteLevel from './components/popupComponents/DeleteLevel';
import AddClass from './components/popupComponents/AddClass';
import PopupContext from './components/popupComponents/PopupContext';

function App() {
  return (
    <div className="App">
      {/* <Register/>
      <Slider/>
      <Donut/>
      <Bar/> */}
      {/* <AddLevel/> */}
      <PopupContext/>
      {/* <DeleteLevel/> */}
      {/* <AddClass/> */}
    </div>
  );
}

export default App;
