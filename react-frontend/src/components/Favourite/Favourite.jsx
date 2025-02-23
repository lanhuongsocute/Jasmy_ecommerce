import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Favourite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> SẢN PHẨM YÊU THÍCH CỦA TÔI </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://i.pinimg.com/564x/e7/ac/af/e7acafeefa771d154e5fd8e6a0a93551.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Sữa tắm Purite
                  </p>
                  <p className="product-price-on-card">Giá : 70.000 đ</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://i.pinimg.com/564x/a9/de/7f/a9de7f5ad55c64714e49acb3f5f5c44c.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Nước xả vải Downy hương nước hoa
                  </p>
                  <p className="product-price-on-card">Giá : 50.000 đ</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://i.pinimg.com/564x/80/97/79/809779446d89a8d830263b586f333408.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Bột giặt Ariel
                  </p>
                  <p className="product-price-on-card">Giá : 60.000 đ</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://i.pinimg.com/564x/1c/fd/22/1cfd22b25c8379f181a4d93e9c0f8f08.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Giấy vệ sinh 
                  </p>
                  <p className="product-price-on-card">Giá : 30.000 đ</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Favourite;
