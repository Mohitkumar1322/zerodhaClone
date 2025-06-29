import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/support" element={<div>Support Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/create-ticket" element={<div>Create Ticket Page</div>} />
        <Route path="/universe" element={<div>Universe Page</div>} />
        <Route path="/hero" element={<div>Hero Section</div>} />
      </Routes>
    </BrowserRouter>
  
);
