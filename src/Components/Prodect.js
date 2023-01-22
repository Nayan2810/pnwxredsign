import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from './Images/cropped.jpg';
import image2  from './Images/gloves.jpeg';
import image3  from './Images/images.jpeg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='crsual' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>X-Ray Gloues</h2>
          <p>UPTO 15% OFF</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2></h2>
          <p>Get offers on many products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Pulse moniter</h2>
          <p>
            Get 10% off
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
} export default ControlledCarousel;

