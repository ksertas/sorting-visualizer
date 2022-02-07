import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlgorithmProvider from './context/AlgorithmContext';
import ThemeProvider from './context/ThemeContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AlgorithmProvider>
        <App />
      </AlgorithmProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
