import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/css/PackageProduct.css";
import axios from "axios"; // Import Axios for HTTP requests

const Packages_Products = () => {
  const [selectedCombos, setSelectedCombos] = useState([]);
  const [combos, setCombos] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    customerName: "",
    phoneNumber: "",
    shippingAddress: "",
    note: "",
    orderDay: new Date().toISOString().slice(0, 10),
    deliveryTimes: 1, // default delivery times
    distance: "2 weeks",
  });

  const { userData } = useSelector((state) => state.user);

  const handleCellClick = (combo) => {
    setSelectedCombos([...selectedCombos, combo]);
  };
  const [orderSubmitted, setOrderSubmitted] = useState(false);


  useEffect(() => {
    const storedCombos = sessionStorage.getItem("productCombos");
    if (storedCombos) {
      setCombos(JSON.parse(storedCombos));
    }
  }, []);

  const handleDelete = (comboIndex, itemIndex) => {
    const updatedCombos = [...combos];
    updatedCombos[comboIndex].items.splice(itemIndex, 1);
    setCombos(updatedCombos);
    sessionStorage.setItem("productCombos", JSON.stringify(updatedCombos));
  };

  const handleCheckboxChange = (combo) => {
    if (selectedCombos.includes(combo)) {
      setSelectedCombos(selectedCombos.filter((c) => c !== combo));
    } else {
      setSelectedCombos([...selectedCombos, combo]);
    }
  };

  const calculateTotalPayment = () => {
    let total = 0;
    selectedCombos.forEach((combo) => {
      total += combo.items.reduce((comboTotal, item) => comboTotal + (item.quantity * item.special_price), 0);
    });
    return total;
  };

 const handleOrderSubmit = async (e) => {
  e.preventDefault();
  try {
    const formData = {
      selectedCombos,
      orderInfo,
    };

    const response = await axios.post('http://127.0.0.1:8000/api/orders', formData);
    console.log('Order submitted successfully:', response.data);
    
    setOrderSubmitted(true);
    setSelectedCombos([]);
    setOrderInfo({
      customerName: "",
      phoneNumber: "",
      shippingAddress: "",
      note: "",
      orderDay: new Date().toISOString().slice(0, 10),
      deliveryTimes: 1,
      distance: "2 weeks",
    });

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Server responded with an error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('No response received from server:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
    console.error('Error submitting order:', error);
    setOrderSubmitted(false); // Ensure orderSubmitted state reflects actual state
  }
};



  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Packages Detail</h2>
      <h4 className="text-center mb-4">
        Xem chi tiết gói hàng - sản phẩm bạn đã tạo và bấm chọn vào Combo để mua nó nhé!
      </h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="titleName">Combo</th>
            <th className="titleName">Product ID</th>
            <th className="titleName">Price</th>
            <th className="titleName">Special Price</th>
            <th className="titleName">Quantity</th>
            <th className="titleName">Color</th>
            <th className="titleName">Size</th>
            <th className="titleName">Product Code</th>
            <th className="titleName">Delete</th>
            <th className="titleName">Add</th>
            <th className="titleName">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {combos.length === 0 ? (
            <tr>
              <td colSpan="11" className="text-center">
                No combos created yet.
              </td>
            </tr>
          ) : (
            combos.map((combo, comboIndex) => (
              <React.Fragment key={comboIndex}>
                <tr>
                  <td
                    className="align-middle nameCombo"
                    rowSpan={combo.items.length + 1}
                  >
                    <Link className="text-info" onClick={() => handleCellClick(combo)}>
                      {combo.name}
                    </Link>
                  </td>
                </tr>
                {combo.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{item.product_id}</td>
                    <td className="oldPrice">{item.price}</td>
                    <td>{item.special_price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.product_code}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(comboIndex, itemIndex)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Link
                        to={`/productdetails/${item.product_id}`}
                        className="btn btn-primary"
                      >
                        Add
                      </Link>
                    </td>
                    <td>{item.quantity * item.special_price}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="10" className="totalName text-center"><strong>Total Combo {comboIndex + 1}</strong></td>
                  <td>
                    <strong>
                      {combo.items.reduce((total, item) => total + (item.quantity * item.special_price), 0)}
                    </strong>
                  </td>
                </tr>
              </React.Fragment>
            ))
          )}
          {combos.length > 0 && (
            <tr>
              <td colSpan="10" className="totalName text-center"><strong>Total for all Combos</strong></td>
              <td>
                <strong>
                  {combos.reduce((total, combo) =>
                    total + combo.items.reduce((comboTotal, item) => comboTotal + (item.quantity * item.special_price), 0), 0)}
                </strong>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h2 className="text-center mt-5">Đặt hàng theo gói định kỳ của bạn!</h2>
      <Form onSubmit={handleOrderSubmit}>
          {orderSubmitted && (
              <div className="alert alert-success mt-3">
                Đơn hàng đã được xuất thành công!
              </div>
            )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Chọn gói</th>
              <th>Tổng thanh toán</th>
              <th>Ngày đặt hàng</th>
              <th>Số lần giao</th>
              <th>Khoảng cách giao</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Combo 1"
                  onChange={() => handleCheckboxChange(combos[0])}
                />
                <Form.Check
                  type="checkbox"
                  label="Combo 2"
                  onChange={() => handleCheckboxChange(combos[1])}
                />
                <Form.Check
                  type="checkbox"
                  label="Combo 3"
                  onChange={() => handleCheckboxChange(combos[2])}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  readOnly
                  value={selectedCombos.length > 0 ? calculateTotalPayment() : "0"}
                  className="text-center"
                />
              </td>
              <td>
                <Form.Control
                  type="date"
                  value={orderInfo.orderDay}
                  onChange={(e) => setOrderInfo({ ...orderInfo, orderDay: e.target.value })}
                  className="text-center"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  min="1"
                  max="10"
                  value={orderInfo.deliveryTimes}
                  onChange={(e) => setOrderInfo({ ...orderInfo, deliveryTimes: e.target.value })}
                  className="text-center"
                />
              </td>
              <td>
                <Form.Control
                  as="select"
                  value={orderInfo.distance}
                  onChange={(e) => setOrderInfo({ ...orderInfo, distance: e.target.value })}
                  className="text-center"
                >
                  <option value="2 weeks">2 tuần</option>
                  <option value="1 month">1 tháng</option>
                  <option value="2 months">2 tháng</option>
                  <option value="3 months">3 tháng</option>
                </Form.Control>
              </td>
            </tr>
          </tbody>
        </Table>
        
        <table align="center" className="user-order">
        <tr>
          <td className="user-order">
            <div>
                  <h3 className="mt-3 text-center">Thông tin người đặt hàng</h3>
                <Form.Group controlId="customerName">
                  <Form.Label className="text-left">Tên khách hàng:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên"
                    value={orderInfo.customerName}
                    onChange={(e) => setOrderInfo({ ...orderInfo, customerName: e.target.value })}
                    className="text-left"
                  />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label className="text-left">Số điện thoại</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={orderInfo.phoneNumber}
                    onChange={(e) => setOrderInfo({ ...orderInfo, phoneNumber: e.target.value })}
                    className="text-left"
                  />
                </Form.Group>
                <Form.Group controlId="shippingAddress">
                  <Form.Label className="text-left">Địa chỉ giao hàng</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Nhập địa chỉ giao hàng"
                    value={orderInfo.shippingAddress}
                    onChange={(e) => setOrderInfo({ ...orderInfo, shippingAddress: e.target.value })}
                    className="text-left"
                  />
                </Form.Group>
                <Form.Group controlId="note">
                  <Form.Label className="text-left">Ghi chú</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Nhập ghi chú"
                    value={orderInfo.note}
                    onChange={(e) => setOrderInfo({ ...orderInfo, note: e.target.value })}
                    className="text-left"
                  />
                </Form.Group>
                <div className="text-center export-btn">
                  <Button variant="primary" type="submit">
                    Xuất đơn hàng
                  </Button>
                </div>
            </div>
          </td>
          <td>
            <div className="text-right img_cartPackage">
              <img src="https://i.pinimg.com/originals/5f/29/3c/5f293c368946b9fb267f8259856148a2.gif" alt="placeholder" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          </td>
        </tr>
        </table>
      </Form>
    </Container>
  );
};

export default Packages_Products;
