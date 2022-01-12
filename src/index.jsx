import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

