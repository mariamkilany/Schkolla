import './App.css';
import LoginPage from './pages/login/Login'
import { Routes, Route } from 'react-router-dom';
import Notfound from'./pages/notFound/Notfound'
import Students from './pages/Students/Students';
import Levels from './pages/Levels/Levels';
import Teacher from './pages/Teachers/Teacher';
import QA from './pages/Q&A/QA';
import Employee from './pages/Empolyee/Empolyee';
import Home from './pages/Home/Home';
import Layout from './components/shared/Layout';
import DashLayout from './components/shared/DashLayout';
import { AuthContextProvider } from "./components/shared/AuthContext";
import PopupContext from './components/popupComponents/PopupContext';
import ProtectedRoute from './components/shared/ProtectedRout';
import Base from './pages/Base/Base';
import Subjects from './pages/Subjects/Subjects';
import axios from 'axios';
function App() {
  const refresh=async()=>{
    console.log('from app')
    await fetch("https://h1.publisher-hub.com/v1/admin/refreshToken")
            .then(res => console.log(res))
    await axios.get("https://h1.publisher-hub.com/v1/admin/refreshToken").then((res,req)=>{console.log(res)})
  }
  refresh()
  return (
    <div className="App">
      <AuthContextProvider>
        <PopupContext>
      <Layout>
        <Routes>
          <Route path='/' element={<Base/>}/>
          <Route
              path="/login"
              element={
                <ProtectedRoute accessBy="non-authenticated">
                  <LoginPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <DashLayout/>
                </ProtectedRoute>
              }
            >
              <Route index element={<Home/>} />
              <Route path='Levels' element={<Levels/>} />
              <Route path='Students' element={<Students/>} />
              <Route path='Teachers' element={<Teacher/>} />
              <Route path='Subjects' element={<Subjects/>} />
              <Route path='Employee' element={<Employee/>} />
              <Route path='QA' element={<QA/>} />
            </Route>
            <Route path='*' element={<Notfound/>} />
        </Routes>
      </Layout>
      </PopupContext>
    </AuthContextProvider>
    </div>
  );
}

export default App;
