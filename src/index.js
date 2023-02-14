import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import { AuthProvider } from './helpers/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/shared/AuthContext';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:4000/v1/';
axios.defaults.withCredentials=true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
