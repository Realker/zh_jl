import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Navbar from './components/Navbar.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);