import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';    
const CarouselComponent = () => {
return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption style={{ marginTop: '200px' }}>
          <h3 className='text-dark' >GRAPHIC DESIGNING</h3>
          <p className='text-dark'>Design you success story with us</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption style={{ marginTop: '200px' }} className='text-dark'>
          <h3>SOFTWARE DEVELOPMENT WITH TREND</h3>
          <p>Experience quality and excellence.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption style={{ marginTop: '20px' }}>
          <h3 className='text-warning'>MOTION GRAPHICS</h3>
          <p className='text-dark'>Join us and elevate your experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;