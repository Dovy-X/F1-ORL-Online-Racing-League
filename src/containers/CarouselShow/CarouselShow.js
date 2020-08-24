import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banner01 from './banner01.jpg';
import banner02 from './banner02.jpg';
import banner03 from './banner03.jpg';
import banner04 from './banner04.jpg';
import banner05 from './banner05.jpg';
import banner06 from './banner06.jpg';
import banner07 from './banner07.jpg';

class CarouselShow extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner01}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner02}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner03}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner04}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner05}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner06}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner07}
                            className="carousel-image"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselShow;