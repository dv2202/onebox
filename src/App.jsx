
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './pages/Home';
import AuthCallback from './components/AuthCallback';
import './index.css'
const App = () => {
  return (
    <div className="bg-black w-screen h-[100%] overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth-callback" element={<AuthCallback />} />
      </Routes>
    </div>
  );
};

export default App;
