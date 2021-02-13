import React, {Component} from 'react'
import CarouselItem from '../carousel-item'
import {Carousel} from 'react-bootstrap'

class CarouselContainer extends Component {
  render() {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="d-flex flex-wrap">
            <CarouselItem/>
          </div>
          <div className="d-flex flex-wrap">
            <CarouselItem/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-wrap">
            <CarouselItem/>
          </div>
          <div className="d-flex flex-wrap">
            <CarouselItem/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
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
}

export default CarouselContainer