import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";

function Collection() {
  const [products, setProducts] = useState([]);
  //componentDidMount
  useEffect(() => {
    console.log("xxxxx");
    fetch(AppURL.ProductListByRemark("COLLECTION"))
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const MyView = products.map((CollectionList, i) => {
    if (CollectionList.special_price === "na") {
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link
            className="text-link"
            to={"/productdetails/" + CollectionList.id}
          >
            <Card className="image-box card w-100">
              <img className="center w-75" src={CollectionList.image} />
              <Card.Body>
                <p className="product-name-on-card">{CollectionList.title}</p>
                <p className="product-price-on-card">
                  Price : đ{CollectionList.price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    } else {
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link
            className="text-link"
            to={"/productdetails/" + CollectionList.id}
          >
            <Card className="image-box card w-100">
              <img className="center w-75" src={CollectionList.image} />
              <Card.Body>
                <p className="product-name-on-card">{CollectionList.title}</p>
                <p className="product-price-on-card">
                  Price :{" "}
                  <strike className="text-secondary">
                    đ{CollectionList.price}
                  </strike>{" "}
                  đ{CollectionList.special_price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    }
  });

  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2> BỘ SƯU TẬP SẢN PHẨM</h2>
        <p>Một số sản phẩm trong bộ sưu tập độc quyền của shop chúng tôi</p>
      </div>

      <Row>{MyView}</Row>
    </Container>
  );
}

export default Collection;
