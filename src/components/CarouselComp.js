import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'
import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg4.jpg'
import bg3 from '../images/bg3.jpg'

function CarouselComp() {
  return ( 
     <Carousel id="carousel" controls={false} indicators={false}>
  <Carousel.Item interval={2500} className="item">
    <img
      className="d-block w-100"
      src={bg1}
      alt="First slide"
    />
    <Carousel.Caption className="caption-text">
      <h1>First slide label</h1>
      <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500} className="item">
    <img
      className="d-block w-100"
      src={bg2}
      alt="Second slide"
    />
    <Carousel.Caption className="caption-text">
      <h1>Second slide label</h1>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500} className="item">
    <img
      className="d-block w-100"
      src={bg3}
      alt="Third slide"
    />
    <Carousel.Caption className="caption-text">
      <h1>Third slide label</h1>
      <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}

export default CarouselComp;