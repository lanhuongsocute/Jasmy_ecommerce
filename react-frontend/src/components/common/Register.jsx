import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../assets/images/login.png";
import { toast } from "react-toastify";
import AppURL from "../../api/AppURL";
import { userRegister } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  //redux state
  const { loading, error, token, userData } = useSelector(
    (state) => state.user
  ); //state.user la lay key trong store.js

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();

    // let MyFormData = new FormData();
    // MyFormData.append("name", name);
    // MyFormData.append("email", email);
    // MyFormData.append("password", password);
    // MyFormData.append("password_confirmation", passwordConfirmation);
    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    // dispatch(userRegister(MyFormData));
    dispatch(userRegister(data));
    // axios
    //   .post(AppURL.PostContact, MyFormData)
    // fetch(AppURL.UserRegister, {
    //   method: "post",
    //   body: MyFormData,
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     localStorage.setItem("token", data.token);
    //     setLoggedIn(true);
    //     setUser(data);
    //   })
    //   .catch(function (error) {
    //     console.log("Catch: ", error);
    //     // alert(error);
    //     toast.error("Có lỗi xảy ra - Kiểm tra lại thông tin");
    //     // btnSend.innerHTML = "Send";
    //   })
    //   .then(() => {
    //     // console.log("Finally hẻe");
    //     // //clear form
    //     // setEmail("");
    //     // setName("");
    //     // setMessage("");
    //     // btnSend.innerHTML = "Send";
    //   });
  };

  /// After Login Redirect to Profile Page
  if (token) {
    localStorage.setItem("token", token);
    return navigate("/profile");
  }

  return (
    <>
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
                <Form className="onboardForm" onSubmit={formSubmit}>
                  <h4 className="section-title-login">
                    {" "}
                    Đăng ký tài khoản người dùng{" "}
                  </h4>
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <Button
                    className="btn btn-block m-2 site-btn-login"
                    type="submit"
                  >
                    {" "}
                    Đăng ký{" "}
                  </Button>
                  <br></br> <br></br>
                  <hr />
                  <p>
                    {" "}
                    <b> Forget My Password? </b>
                    <Link to="/forget">
                      <b> Forget Password </b>{" "}
                    </Link>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> Already Have An Account ? </b>
                    <Link to="/login">
                      <b> Login </b>{" "}
                    </Link>{" "}
                  </p>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <img className="onboardBanner" src={Login} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
