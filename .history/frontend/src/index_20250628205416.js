import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <route path="/signup" element={<Signup />}></route>
        <route path="/" element={<HomePage />}></route>
        <route path="/" element={<HomePage />}></route>
        <route path="/" element={<HomePage />}></route>
        
      </Routes>
    </BrowserRouter>
  
);
