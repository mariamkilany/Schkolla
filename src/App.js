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
import { useState,useEffect } from 'react';
import { AuthProvider} from './context/AuthProvider';
import useAuth from './Hooks/useAuth';
import RequireAuth from './components/RequireAuth/RequireAuth.jsx';
import useRefreshToken from './Hooks/useRefreshToken';
import axiosPrivate from './Api/Api';

function App() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {

      const requestIntercept = axiosPrivate.interceptors.request.use(
          config => {
              if (!config.headers['Authorization']) {
                  config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
              }
              return config;
          }, (error) => Promise.reject(error)
      );

      const responseIntercept = axiosPrivate.interceptors.response.use(
          response => response,
          async (error) => {
              const prevRequest = error?.config;
              if (error?.response?.status === 403 && !prevRequest?.sent) {
                  prevRequest.sent = true;
                  const newAccessToken = await refresh();
                  prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                  return axiosPrivate(prevRequest);
              }
              return Promise.reject(error);
          }
      );

      return () => {
          axiosPrivate.interceptors.request.eject(requestIntercept);
          axiosPrivate.interceptors.response.eject(responseIntercept);
      }
  }, [auth, refresh])
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route element={<RequireAuth />}>
        <Route path={'/DashBoard'} element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path={'Levels'} element={<Levels/>}/>
          <Route path={'Students'} element={<Students/>}/>
          <Route path={'Teachers'} element={<Teacher/>}/>
          <Route path={'Empolyee'} element={<Employee/>}/>
          <Route path={'QA'} element={<QA/>}/>
        </Route>
        </Route>
        <Route path='*' element={<Notfound/>} />
      </Routes>
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
