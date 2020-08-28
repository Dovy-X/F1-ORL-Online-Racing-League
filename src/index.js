import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tachyons';
import './main.css';
import * as serviceWorker from './serviceWorker';
import CarouselShow from './pages/page-home/components/CarouselShow';
import Header from './header/Header';


import Sponsors from './pages/page-home/components/Sponsors';
import Titles from './pages/page-home/components/Titles';
import BannerConnect from './pages/page-home/components/BannerConnect';
import BannerJoin from './pages/page-home/components/BannerJoin';
import BannerVideo from './pages/page-home/components/BannerVideo';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <div className="content" >
        <CarouselShow/>
        <Sponsors/>
        <Titles/>
        <BannerConnect/>
        <BannerJoin/>
        <BannerVideo/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
