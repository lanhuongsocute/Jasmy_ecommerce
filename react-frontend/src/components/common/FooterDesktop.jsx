import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

function FooterDesktop() {
  const [address, setAddress] = useState("");
  const [androidAppLink, setAndroidAppLink] = useState("");
  const [iosAppLink, setIosAppLink] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [copyrightText, setCopyrightText] = useState("");
  useEffect(() => {
    fetch(AppURL.SiteInfo)
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        // setAbout(data[0].about);
        setYtLink(data[0].youtube_link);
        setFbLink(data[0].facebook_link);
        setAddress(data[0].address);
        setIosAppLink(data[0].ios_app_link);
        setAndroidAppLink(data[0].android_app_link);
        setCopyrightText(data[0].copyright_text);
      });
  }, []);
  return (
    <>
      <div className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container>
          <Row className="px-0 my-5">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">Trụ sở chính</h5>
              {/* <p>
                123 Quang Trung, Tp. Quảng Ngãi, tỉnh Quảng Ngãi <br></br>
                Email: thanhbc@gmail.com
              </p> */}
              {address}
              <h5 className="footer-menu-title">Mạng Xã hội</h5>
              <a href={fbLink}>
                <i className="fab m-1 h4 fa-facebook"></i>
              </a>
              <a href={ytLink}>
                <i className="fab m-1 h4 fa-instagram"></i>
              </a>
              <a href="">
                <i className="fab m-1 h4 fa-twitter"></i>
              </a>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">Về SHOP</h5>
              <Link to="/about" className="footer-link">
                {" "}
                Giới thiệu
              </Link>
              <br></br>
              <Link to="/" className="footer-link">
                {" "}
                Thông tin shop
              </Link>
              <br></br>
              <Link to="/contact" className="footer-link">
                {" "}
                Liên hệ
              </Link>
              <br></br>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">Thông tin khác</h5>
              <Link to="/purchase" className="footer-link">
                Hướng dẫn mua hàng
              </Link>
              <br></br>
              <Link to="/privacy" className="footer-link">
                {" "}
                Chính sách bảo mật
              </Link>
              <br></br>
              <Link to="/refund" className="footer-link">
                {" "}
                Chính sách đổi trả{" "}
              </Link>
              <br></br>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
              <Link to={androidAppLink}>
                <img src={Google} />
              </Link>
              <br></br>
              <Link to={iosAppLink}>
                <img className="mt-2" src={Apple} />
              </Link>
              <br></br>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
          <Container>
            <Row>
              <h6 className="text-white">{copyrightText}</h6>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default FooterDesktop;
