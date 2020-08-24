import React from 'react';
import ReactDOM from 'react-dom';
import CarouselShow from './containers/CarouselShow/CarouselShow';
import './index.css';
import Header from './containers/header/Header';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CarouselShow/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
