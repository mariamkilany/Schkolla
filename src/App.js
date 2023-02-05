import './App.css';
import Stages from './components/Stages/Stages'
import Slider from './components/studentSlider/Slider';
import Register from './components/Register/Register';
import Login from './pages/login/Login'
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
      <Login/>
    </div>
  );
}

export default App;
