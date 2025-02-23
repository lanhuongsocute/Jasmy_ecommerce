import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

class Cart extends Component {
  render() {
    const { cartItems } = this.props; // Get cartItems from Redux store

    return (
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Danh sách giỏ hàng sản phẩm</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2>Giỏ hàng trống</h2>
            <img src="https://assets-v2.lottiefiles.com/a/f5a0b160-1165-11ee-8038-63e3305019f4/oqG6VEkEjf.gif" alt="this slowpoke moves"  width="250" />
        </div>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="mb-3">
              <Col md={3} lg={3} sm={6} xs={6}>
                <img className="cart-product-img" src={item.image} alt={item.name} />
              </Col>
              <Col md={6} lg={6} sm={6} xs={6}>
                <h5 className="product-name">{item.name}</h5>
                <h6>Quantity = {item.quantity}</h6>
                <h6>Price = {item.quantity} x {item.price} = {item.quantity * item.price} đ</h6>
              </Col>
              <Col md={3} lg={3} sm={12} xs={12}>
                <input
                  placeholder={item.quantity}
                  className="form-control text-center"
                  type="number"
                />
                <Button className="btn btn-block w-100 mt-3  site-btn">
                  <i className="fa fa-trash-alt"></i> Remove
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items, // Get cart items from Redux store
});

export default connect(mapStateToProps)(Cart);
