import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/images/slide1.jpg";
import Slider2 from "../../assets/images/slide2.jpg";
import Slider3 from "../../assets/images/slide3.jpg";

const HomeSlider = ({ SliderData }) => {
  console.log(SliderData);
  const MyView = SliderData.map((slider, i) => {
    return (
      <div key={i.toString()}>
        <img className="slider-img" src={slider.slide_img} />
      </div>
    );
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>{MyView}</Slider>
    </div>
  );
};

export default HomeSlider;
