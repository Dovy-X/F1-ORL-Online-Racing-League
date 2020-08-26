import React from 'react';
import ReactDOM from 'react-dom';
import CarouselShow from './containers/CarouselShow/CarouselShow';
import './index.css';
import Header from './containers/header/Header';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Sponsors from './components/Sponsors/Sponsors';
import Titles from './components/Titles/Titles';
import BannerConnect from './components/Banner_Connect/Banner_Connect';
import BannerJoin from './components/BannerJoin/BannerJoin';
import BannerVideo from './components/BannerVideo/BannerVideo';

ReactDOM.render(
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
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
