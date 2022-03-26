import React from 'react'
import './Carousel.scss'
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
  return (
    <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      src="https://i2.wp.com/ellashablan.com/wp-content/uploads/2016/12/marcas-ropa-mujer.jpg?resize=740,480"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>MODA MUJER</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      src="http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2018/10/portada-wp-modahombre.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>MODA HOMBRE</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      src="https://media.revistagq.com/photos/5ca5f975b73808e4ff819508/master/pass/zapatillas_basicas_para_hombre_moda_tendencias_2831.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>ZAPATILLAS</h3>
  
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselContainer
