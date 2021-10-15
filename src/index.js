import React from 'react';
import ReactDOM from 'react-dom';

import StoreProvider from './stores/StoreProvider';

import App from './components/App';

import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
