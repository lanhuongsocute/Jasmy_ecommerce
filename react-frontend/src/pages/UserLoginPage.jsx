import React, { Component, Fragment, useEffect, useState } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import { defaultoptions } from "../utils/auth";
import UserLogin from "../components/common/UserLogin";
import AppURL from "../api/AppURL";

const UserLoginPage = (e) => {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   window.scroll(0, 0);
  //   fetch(AppURL.UserData, defaultoptions)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      {/* <UserLogin user={user} setUser={setUser} /> */}
      <UserLogin />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default UserLoginPage;
