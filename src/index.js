import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from './components/App';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter><App /></BrowserRouter>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker();
