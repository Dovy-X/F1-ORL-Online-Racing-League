import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banner01 from '../images/banner01.jpg';
import banner02 from '../images/banner02.jpg';
import banner03 from '../images/banner03.jpg';
import banner04 from '../images/banner04.jpg';
import banner05 from '../images/banner05.jpg';
import banner06 from '../images/banner06.jpg';
import banner07 from '../images/banner07.jpg';

class CarouselShow extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner01}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner02}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner03}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner04}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner05}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner06}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner07}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselShow;