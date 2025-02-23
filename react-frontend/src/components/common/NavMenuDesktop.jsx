import React, { Component, useEffect } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/Jasmy_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { defaultoptions } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { readUserByToken } from "../../features/userSlice";
import { getCartCount } from "../../features/cartSlice";

function NavMenuDesktop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //redux state
  const { token, userData } = useSelector((state) => state.user);
  const { count } = useSelector((state) => state.cart);
  console.log("Nav Menu: ", userData);

  // automatically authenticate user if token is found
  useEffect(() => {
    // const token = localStorage.getItem("token");
    if (token) {
      dispatch(readUserByToken());

      dispatch(getCartCount());
    }
  }, [token]);

  const logoutHandler = (e) => {
    dispatch(logout());
    navigate("/login");
  };
  // console.log(loggedIn);
  return (
    <>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  {" "}
                  <img className="nav-logo h4 btn" src={Logo} />{" "}
                </Link>
                <Link to="/" className="h4 btn">
                      <i className="fa fa-home"> </i>
                      Trang chủ
                </Link>
                <Link to="/about" className="h4 btn">
                      Giới thiệu
                </Link>
                <Link to="/contact" className="h4 btn">
                      Liên hệ
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>
                <Link to="/notification" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>

                {/* //kiem tra dang nhap hay chua de hien thi cac link cho phu hop */}
                {!userData && (
                  <>
                    <Link to="/login" className="h4 btn">
                      Đăng nhập
                    </Link>
                    <Link to="/register" className="h4 btn">
                      Đăng ký
                    </Link>
                    <Link to="/cart" className="cart-btn">
                      <i className="fa fa-shopping-cart"></i>0 {" "}
                    </Link>
                  </>
                )}

                {userData && (
                  <>
                    <Link to="/profile" className="h4 btn">
                      {userData.user.name}
                    </Link>
                    <button onClick={logoutHandler} className="h4 btn">
                      Logout
                    </button>
                    <Link to="/cart" className="cart-btn">
                      <i className="fa fa-shopping-cart"></i>
                      {count} {" "}
                    </Link>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavMenuDesktop;
