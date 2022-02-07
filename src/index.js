import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlgorithmProvider from './context/AlgorithmContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AlgorithmProvider>
      <App />
    </AlgorithmProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
