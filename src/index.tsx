import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BackgroundProvider } from './backgrounds/BackgroundContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </React.StrictMode>
);
