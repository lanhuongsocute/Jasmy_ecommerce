import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [slider, setSlider] = useState(null); //state for slider
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("xxxxx");
    fetch(AppURL.ProductListByRemark("NEW"))
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  // render() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const MyView = products.map((NewList, i) => {
    if (NewList.special_price == "na") {
      return (
        <div>
          <Link className="text-link" to={"/productdetails/" + NewList.id}>
            <Card className="image-box card">
              <img className="center" src={NewList.image} />
              <Card.Body>
                <p className="product-name-on-card">{NewList.title}</p>
                <p className="product-price-on-card">
                  Price : đ{NewList.price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
      );
    } else {
      return (
        <div key={NewList.id}>
          {" "}
          <Link className="text-link" to={"/productdetails/" + NewList.id}>
            <Card className="image-box card">
              <img className="center" src={NewList.image} />
              <Card.Body>
                <p className="product-name-on-card">{NewList.title}</p>
                <p className="product-price-on-card">
                  Price :{" "}
                  <strike className="text-secondary">đ{NewList.price}</strike> đ
                  {NewList.special_price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
      );
    }
  });
  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>
          SẢN PHẨM MỚI &nbsp;
          <a className="btn btn-sm ml-2 site-btn" onClick={previous}>
            <i className="fa fa-angle-left"></i>
          </a>
          &nbsp;
          <a className="btn btn-sm ml-2 site-btn" onClick={next}>
            <i className="fa fa-angle-right"></i>
          </a>
        </h2>
        <p>
          Một số sản phẩm mới được cập nhật vào cửa hàng, có thể bạn sẽ quan tâm
        </p>
      </div>
      <Row>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {MyView}
        </Slider>
      </Row>
    </Container>
  );
  // }
};
export default NewArrival;
