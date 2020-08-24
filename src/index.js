import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './containers/header/Header';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
