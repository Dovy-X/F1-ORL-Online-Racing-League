import React, { Component } from 'react';

import CarouselShow from './components/CarouselShow';
import Sponsors from './components/Sponsors';
import Titles from './components/Titles';
import BannerConnect from './components/BannerConnect';
import BannerJoin from './components/BannerJoin';
import BannerVideo from './components/BannerVideo';

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselShow/>
                <Sponsors/>
                <Titles/>
                <BannerConnect/>
                <BannerJoin/>
                <BannerVideo/>
                {window.scrollTo(0, 0)}
            </div>
        );
    }
}

export default Home;