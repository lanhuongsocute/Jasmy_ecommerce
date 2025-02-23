import React, { Component, useState } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/Jasmy_logo.png";
import { Link } from "react-router-dom";
import MegaMenuMobile from "../home/MegaMenuMobile";

function NavMenuMobile() {
  //2 state nay thiet lap class de open hay close menu
  const [sideNavState, setSideNavState] = useState("SideNavClose");
  const [contentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );

  const SideNavOpenClose = () => {
    let currentSideNavState = sideNavState;
    let currentContentOverState = contentOverState;
    if (currentSideNavState === "sideNavOpen") {
      //  this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      //  this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  };

  const MenuBarClickHandler = () => {
    SideNavOpenClose();
  };

  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  };

  return (
    <div>
      <div className="TopSectionDown">
        <Container
          fluid={"true"}
          className="fixed-top shadow-sm p-2 mb-0 bg-white"
        >
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button className="btn" onClick={MenuBarClickHandler}>
                <i className="fa fa-bars"></i>{" "}
              </Button>

              <Link to="/">
                {" "}
                <img className="nav-logo" src={Logo} />{" "}
              </Link>

              <Button className="cart-btn">
                <i className="fa fa-shopping-cart"></i> 3 Items{" "}
              </Button>
            </Col>
          </Row>
        </Container>

        <div className={sideNavState}>
          <MegaMenuMobile />
        </div>
        <div
          onClick={ContentOverlayClickHandler}
          className={contentOverState}
        ></div>
      </div>
    </div>
  );
}

export default NavMenuMobile;
