import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './global.css';
import App from './app/App';
import configureStore, { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
