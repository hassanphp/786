import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './Theme';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


