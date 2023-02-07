import './App.css';
import Login from './pages/login/Login'
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Notfound from'./pages/notFound/Notfound'
import Loading from './pages/Loading/Loading';
import Students from './pages/Students/Students';
import Levels from './pages/Levels/Levels';
import Teacher from './pages/Teachers/Teacher';
import QA from './pages/Q&A/QA';
import Employee from './pages/Empolyee/Empolyee';
import Home from './pages/Home/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/DashBoard'} element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path={'Levels'} element={<Levels/>}/>
          <Route path={'Students'} element={<Students/>}/>
          <Route path={'Teachers'} element={<Teacher/>}/>
          <Route path={'Empolyee'} element={<Employee/>}/>
          <Route path={'QA'} element={<QA/>}/>
        </Route>
        <Route path='*' element={<Notfound/>} />
      </Routes>
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
