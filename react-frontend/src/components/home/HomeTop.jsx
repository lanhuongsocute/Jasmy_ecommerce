import React, { Component, Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";

const HomeTop = () => {
  const [menuData, setMenuData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch(AppURL.AllCategoryDetails)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMenuData(data);
      })
      .catch((err) => {
        toast.error("Co loi xay ra");
      });

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
        <Row>
          <Col lg={3} md={3} sm={12}>
            <MegaMenu data={menuData} />
          </Col>

          <Col lg={9} md={9} sm={12}>
            <HomeSlider SliderData={sliderData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeTop;
