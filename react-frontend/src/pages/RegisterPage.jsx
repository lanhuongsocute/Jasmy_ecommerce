import React, { Component, Fragment, useEffect, useState } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Register from "../components/common/Register";
import { tokenoptions } from "../utils/auth";
import AppURL from "../api/AppURL";

const RegisterPage = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    window.scroll(0, 0);
    fetch(AppURL.UserData, tokenoptions)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Register user={user} setUser={setUser} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default RegisterPage;
