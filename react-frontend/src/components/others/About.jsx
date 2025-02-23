import React, { Component, Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import parse from "html-react-parser";
const About = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    fetch(AppURL.SiteInfo)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setAbout(data[0].about);
      });
  }, []);
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white mt-2"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            {/* <h4 className="section-title-login">Về Chúng Tôi </h4>

              <section>
                <h5>Sứ Mệnh Của Chúng Tôi</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut est euismod, fermentum libero vitae, imperdiet tortor. In
                  hac habitasse platea dictumst. Integer bibendum, mauris sit
                  amet tristique bibendum, est justo hendrerit quam.
                </p>

                <h5>Đội Ngũ Của Chúng Tôi</h5>
                <p>
                  Chúng tôi có một đội ngũ chuyên nghiệp, đam mê với công việc
                  của mình. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin eget ligula id nisi rhoncus rhoncus. Vestibulum
                  tincidunt, augue nec tempus consequat, enim libero cursus
                  neque, ac tincidunt justo justo eget urna.
                </p>

                <h5>Lịch Sử Công Ty</h5>
                <p>
                  Được thành lập vào năm 20XX, công ty của chúng tôi cam kết
                  cung cấp sản phẩm/dịch vụ chất lượng cao cho khách hàng. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est
                  euismod, fermentum libero vitae, imperdiet tortor. In hac
                  habitasse platea dictumst.
                </p>
              </section> */}
            {parse(about)}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
