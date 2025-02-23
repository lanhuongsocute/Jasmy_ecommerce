import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions"; // Import your addToCart action creator
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Products extends Component {
  handleClick = (product) => {
    this.props.addToCart(product); // Dispatch addToCart action with product
  };

  render() {
    const { products } = this.props; // Assuming products are passed as props

    return (
      <Container>
        <div className="product-list">
          {products.map((product) => (
            <Row key={product.id} className="mb-3">
              <Col md={3} lg={3} sm={6} xs={6}>
                <img className="cart-product-img" src={product.image} alt={product.name} />
              </Col>
              <Col md={6} lg={6} sm={6} xs={6}>
                <h5 className="product-name">{product.name}</h5>
                <h6>Price: {product.price}</h6>
              </Col>
              <Col md={3} lg={3} sm={12} xs={12}>
                <Button onClick={() => this.handleClick(product)}>AddToCart</Button>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items, // Assuming products are stored in Redux store
});

const mapDispatchToProps = {
  addToCart, // Map addToCart action creator to props
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
