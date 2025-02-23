import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../../features/cartSlice';
import { removeCartAfterOrder } from '../../features/packageSlice';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const CartList = () => {
  const { cartID } = useParams();
  const dispatch = useDispatch();
  const cartids = useSelector(state => state.package.cartids);
  const user_id = useSelector(state => state.user.user_id);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    deliveryDate: '',
    deliveryDuration: '1',
    content: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const foundCart = cartids.find(cart => cart.id === Number(cartID));
        if (!foundCart) {
          throw new Error(`Giỏ hàng với id ${cartID} không tìm thấy trong cartids.`);
        }

        const productIds = foundCart.products.map(product => product.product_id);

        const response = await axios.get(AppURL.showCart, {
          params: {
            ids: productIds.join(','),
          },
        });

        const detailedProducts = foundCart.products.map(cartProduct => {
          const productDetails = response.data.find(p => p.id === cartProduct.product_id);
          return {
            ...cartProduct,
            ...productDetails
          };
        });

        setProducts(detailedProducts);
        setCart(foundCart);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartID, cartids]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleDeliveryDurationChange = (e) => {
    setCustomerInfo({ ...customerInfo, deliveryDuration: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      customerInfo: {
        name: customerInfo.name,
        phone: customerInfo.phone,
        address: customerInfo.address,
        email: customerInfo.email,
        deliveryDate: customerInfo.deliveryDate,
        deliveryDuration: customerInfo.deliveryDuration,
        content: customerInfo.content,
      },
      products: cart.products.map(product => ({
        product_id: product.product_id,
        quantity: product.quantity,
        color: product.color,
        size: product.size,
      })),
      user_id: user_id,
    };

    console.log('Submitting order data:', orderData);

    try {
      await dispatch(placeOrder({ cartID, orderData }));
      dispatch(removeCartAfterOrder({ cartID }));
      window.location.href = '/cart'; // Redirect after successful order
    } catch (error) {
      console.error('Error placing order:', error.message);
      // Handle error here, show notification to user or log to analytics
    }
  };

  if (loading) return <p className="text-center">Đang tải danh sách sản phẩm...</p>;
  if (error) return <p className="text-center">Lỗi: {error}</p>;
  if (!cart || products.length === 0) return <p className="text-center">Không có sản phẩm trong giỏ hàng.</p>;

  return (
    <Container>
      <div className="section-title text-center mb-55">
        <h2>Chi tiết giỏ hàng {cart.id}</h2>
      </div>

      <Row>
        {products.map((product, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <div className="card mb-3">
              <div className="card-body">
                <img className="cart-product-img" src={product.image} alt={product.title} />
                <h5 className="product-name">{product.title}</h5>
                <p>Số lượng: {product.quantity}</p>
                <p>Màu sắc: {product.color}</p>
                <p>Kích cỡ: {product.size}</p>
                <p>Giá: {calculatePrice(product).toLocaleString()}đ</p>
                <p>Tổng: {(calculatePrice(product) * product.quantity).toLocaleString()}đ</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="section-title text-center mb-55">
        <h2>Thông tin khách hàng</h2>
      </div>

      <Form onSubmit={handleSubmit} className="customer-info-form">
        <Row className="justify-content-center">
          <Col sm={10} lg={7} xl={5} className="mb-50">
            <div className="form-wrapper p-4 bg-light rounded">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Tên khách hàng"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Số Điện Thoại"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Địa chỉ giao hàng"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Địa chỉ email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  name="deliveryDate"
                  placeholder="Ngày giao hàng"
                  value={customerInfo.deliveryDate}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Thời gian giao hàng</Form.Label>
                <Form.Control
                  as="select"
                  name="deliveryDuration"
                  value={customerInfo.deliveryDuration}
                  onChange={handleDeliveryDurationChange}
                >
                  <option value="1">Nhanh</option>
                  <option value="2">Bình thường</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="content"
                  placeholder="Ghi chú"
                  value={customerInfo.content}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Đặt hàng
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

// Function to calculate product price based on specific conditions
const calculatePrice = (product) => {
  let price = product.price; // Use product price from API
  if (product.price_sale !== 0) {
    price = product.special_price - (product.price_sale * product.special_price) / 100;
  }
  return price;
};

export default CartList;
