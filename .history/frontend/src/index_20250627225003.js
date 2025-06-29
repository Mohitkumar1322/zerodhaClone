import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ter } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
