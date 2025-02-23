import React, { Component, Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

const SuggestedProduct = ({ subcategory }) => {
  const [MyList, setMyList] = useState([]);
  console.log(subcategory);
  useEffect(() => {
    fetch(AppURL.SimilarProduct(subcategory))
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMyList(data);
      });
  }, []);

  if (MyList.length > 0) {
    const MyView = MyList.map((ProductList, i) => {
      if (ProductList.special_price === "na") {
        return (
          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link
              className="text-link"
              to={"/productdetails/" + ProductList.id}
            >
              <Card className="image-box card">
                <img className="center" src={ProductList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price : {ProductList.price}đ
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link
              className="text-link"
              to={"/productdetails/" + ProductList.id}
            >
              <Card className="image-box card">
                <img className="center" src={ProductList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price :{" "}
                    <strike className="text-secondary">
                      {ProductList.price}đ
                    </strike>{" "}
                    {ProductList.special_price}đ
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  } // end if conditon
  else {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <p>There have no similar product </p>
        </Container>
      </Fragment>
    );
  } // end else
};

export default SuggestedProduct;
