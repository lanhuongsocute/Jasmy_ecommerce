import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Categories() {
  const [menuData, setMenuData] = useState([]);
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
  }, []);
  const CatList = menuData;
  const MyView = CatList.map((catItem, i) => {
    return (
      <Col
        key={i.toString()}
        className="p-0"
        xl={2}
        lg={2}
        md={2}
        sm={6}
        xs={6}
      >
        <Link
          className="text-link"
          to={`/productcategory/${catItem.category_name}`}
        >
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img className="center" src={catItem.category_image} />
              <h5 className="category-name">{catItem.category_name}</h5>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2> DANH MỤC SẢN PHẨM</h2>
          <p>
            Một số danh mục sản phẩm tại cửa hàng chúng tôi có thể bạn quan tâm
          </p>
        </div>

        <Row>{MyView}</Row>
      </Container>
    </>
  );
}

export default Categories;
