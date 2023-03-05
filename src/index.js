import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/shared/AuthContext';
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

reportWebVitals();
