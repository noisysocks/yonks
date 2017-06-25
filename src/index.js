import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
