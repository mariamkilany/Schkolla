import './App.css';
import LoginPage from './pages/login/Login'
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
import Layout from './components/shared/Layout';
import DashLayout from './components/shared/DashLayout';
import { useState,useEffect } from 'react';
import { AuthContextProvider } from "./components/shared/AuthContext";
import ProtectedRoute from './components/shared/ProtectedRout';
import Base from './pages/Base/Base';
function App() {
  
  return (
    <div className="App">
      <AuthContextProvider>
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
              <Route path='Employee' element={<Employee/>} />
              <Route path='QA' element={<QA/>} />
            </Route>
            <Route path='*' element={<Notfound/>} />
        </Routes>
      </Layout>
    </AuthContextProvider>
    </div>
  );
}

export default App;
