import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './containers/nav/Nav';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Nav />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
