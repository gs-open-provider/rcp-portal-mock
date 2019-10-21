import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebFont from 'webfontloader';
import './index.css';
import './i18n';
import App from './app.component';
import portalApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const store = createStore(portalApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
