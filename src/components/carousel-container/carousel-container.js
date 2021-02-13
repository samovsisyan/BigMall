import React from 'react';
import {CarouselItem} from '../index';
import {Carousel} from 'react-bootstrap';
import classes from './carousel-container.scss';

function CarouselContainer() {
    return (
        <Carousel indicators={false}>
            <Carousel.Item >
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
                <div className="d-flex flex-wrap">
                    <CarouselItem/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;