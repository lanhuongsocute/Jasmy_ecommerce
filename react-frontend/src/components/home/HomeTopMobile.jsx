import React, { Component, Fragment, useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import { Container, Row, Col } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
const HomeTopMobile = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch(AppURL.AllSlider)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setSliderData(data);
      })
      .catch((err) => {
        toast.error("Co loi xay ra khi loi data ra");
      });
  }, []);
  return (
    <Fragment>
      <Container className="p-0 m-0 overflow-hidden" fluid={true}>
        <Row className="p-0 m-0 overflow-hidden">
          <Col lg={12} md={12} sm={12}>
            <HomeSlider SliderData={sliderData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeTopMobile;
