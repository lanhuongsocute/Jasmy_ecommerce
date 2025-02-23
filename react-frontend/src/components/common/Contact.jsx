import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";
import validation from "../../validation/Validation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let btnSend = document.querySelector("#btnSend");
  const nameOnChange = (event) => {
    let name = event.target.value;
    // alert(name);
    setName(name);
  };

  const emailOnChange = (event) => {
    let email = event.target.value;
    // alert(email);
    setEmail(email);
  };

  const messageOnChange = (event) => {
    let message = event.target.value;
    // alert(message);
    setMessage(message);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (message.length === 0) {
      toast.error("Please write your message");
    } else if (name.length === 0) {
      toast.error("Please write down our name");
    } else if (email.length === 0) {
      toast.error("Please write down our Email");
    } else if (!validation.NameRegx.test(name)) {
      toast.error("Invaid Name");
    } else {
      btnSend.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);

      // axios
      //   .post(AppURL.PostContact, MyFormData)
      fetch(AppURL.PostContact, {
        method: "post",
        body: MyFormData,
      })
        .then((data) => {
          console.log(data); //kiem tra status co the kiem tra o day
          return data.json();
        })
        .then((response) => {
          console.log(response);
          if (response === 1) {
            // alert("Message Send Successfully");
            toast.success("Thông tin của bạn đã được gởi đi thành công!");
          } else {
            // alert("error");
            toast.error("Có lỗi trong quá trình gởi thông tin.");
          }
        })
        .catch(function (error) {
          console.log("Catch: ", error);
          // alert(error);
          toast.error("Có lỗi xảy ra - Kiểm tra lại thông tin");
          btnSend.innerHTML = "Send";
        })
        .then(() => {
          console.log("Finally here");
          //clear form
          setEmail("");
          setName("");
          setMessage("");
          btnSend.innerHTML = "Send";
        });
    }
  };

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
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <Form className="onboardForm" onSubmit={onFormSubmit}>
                  <h4 className="section-title-login">CONTACT WITH US </h4>
                  <h6 className="section-sub-title">Please Contact With Us </h6>
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={nameOnChange}
                    value={name}
                  />

                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Email"
                    onChange={emailOnChange}
                    value={email}
                  />

                  {/* <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Message"
                    onChange={messageOnChange}
                  /> */}
                  <Form.Control
                    onChange={messageOnChange}
                    value={message}
                    className="form-control m-2"
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                  />
                  <Button
                    type="submit"
                    id="btnSend"
                    className="btn btn-block m-2 site-btn-login"
                  >
                    {" "}
                    Send{" "}
                  </Button>
                </Form>
              </Col>

             <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <br />
                <br />
                <p className="section-title-contact">
                  567 Lê Duẩn, Buôn Ma Thuột, Đăk Lăk, Việt Nam <br />
                  Email: Support@jasmyecommerce.com
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.992219288488!2d108.04819231477656!3d12.675518022073387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31431b97f3a360d3%3A0x5e4288b2b3d24862!2s567%20L%C3%AA%20Du%E1%BA%A9n%2C%20Th%C3%A0nh%20ph%E1%BB%91%20Bu%C3%B4n%20Ma%20Thu%E1%BB%99t%2C%20%C4%90%E1%BA%AFk%20L%E1%BA%AFk%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2sus!4v1626365830516!5m2!1sen!2sus"
                  width="550"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Loading"
                ></iframe>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default Contact;
