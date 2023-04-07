import './App.css';
import './css/bootstrap.css'
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
import ShowStudent from './pages/Students/ShowStudent'
import AuthContext, { AuthContextProvider } from "./components/shared/AuthContext";
import PopupContext from './components/popupComponents/PopupContext';
import ProtectedRoute from './components/shared/ProtectedRout';
import Base from './pages/Base/Base';
import Subjects from './pages/Subjects/Subjects';
import { useContext, useEffect } from 'react';
import ShowAllTeachers from './pages/Teachers/ShowAllTeachers';
import ShowDataContext from './components/ShowData/ShowDataContext';
import Showlevel from './pages/Levels/Showlevel'
import ShowClass from './pages/Levels/ShowClass'
import axios from 'axios';
function App() {
  // const {accessToken,setAccessToken}=useContext(AuthContext);
  //   useEffect(() => {
  //   let currentTime = new Date().getTime();
  //   const firstLogin = localStorage.getItem("firstLogin");
  //   let intervalId;
  //   if (firstLogin) {
  //     const refreshToken = async () => {
  //       try {
  //         const res1 = await axios.get("admin/refreshToken", {
  //           withCredentials: true
  //         });
  //         setAccessToken(res1.data.accessToken)
  //         localStorage.setItem('accessToken',res1.data.accessToken)
  //         const id=localStorage.getItem('id');
  //         axios.defaults.headers.common['Authorization'] = `Bearer ${res1.data.accessToken}`;
  //         axios.defaults.params={ userId: id }
  //       } catch (err) {
  //         localStorage.removeItem("firstLogin");
  //         console.log(err)
  //         window.location.href = "/login";
  //       }
  //     };
  //     refreshToken();
  //     intervalId = setInterval(() => {
  //       if (new Date().getTime() - currentTime >= 9 * 60 * 1000) {
  //         currentTime = new Date().getTime();
  //         refreshToken();
  //       }
  //     }, 1000);
  //   }
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <div className="App">
        <PopupContext>
          <ShowDataContext>
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
                    <Route path={`Levels/:stageId`} element={<Showlevel/>} />
                    <Route path='Levels/:stageId/:classId' element={<ShowClass/>} />
                    <Route path='Students' element={<Students/>} />
                    <Route path='Students/:stuId' element={<ShowStudent/>} />
                    <Route path='Teachers' element={<ShowAllTeachers />} />
                    <Route path='Teachers/teacherData' element={<Teacher/>} />
                    <Route path='Subjects' element={<Subjects/>} />
                    <Route path='Employee' element={<Employee/>} />
                    <Route path='QA' element={<QA/>} />
                  </Route>
                  <Route path='*' element={<Notfound/>} />
              </Routes>
            </Layout>
            </ShowDataContext>
      </PopupContext>
    </div>
  );
}

export default App;

