import './App.css';
import Stages from './components/Stages/Stages'
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Donut from './components/donutChart/Donut';
import Bar from './components/barChart/Bar';
import AddLevel from './components/popupComponents/AddLevel';
import DeleteLevel from './components/popupComponents/DeleteLevel';
import AddClass from './components/popupComponents/AddClass';
import PopupContext from './components/popupComponents/PopupContext';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
          <Routes>
      <Route path="/" element={<Donut/>}/>
        <Route path="login" element={ <Register/>} />
        </Routes>
      {/* <Slider/> */}
      {/* <Stages/> */}

       {/* <Register/> */}
      {/* <Slider/>
      <Donut/>
      <Bar/>  */}
      {/* <AddLevel/> */}
      {/* <PopupContext/> */}
      {/* <DeleteLevel/> */}
      {/* <AddClass/> */}

    </div>
  );
}

export default App;
