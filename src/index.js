import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlgorithmProvider from './contexts/AlgorithmContext';
import SortingSettingsProvider from './contexts/SortingSettingsContext';
import ThemeProvider from './contexts/ThemeContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AlgorithmProvider>
        <SortingSettingsProvider>
          <App />
        </SortingSettingsProvider>
      </AlgorithmProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
