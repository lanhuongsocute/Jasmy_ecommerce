import React, { Component, useEffect, useState } from "react";
import { Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Category from "../components/ProductDetails/Category";
import { useParams } from "react-router-dom";

const ProductCategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    // alert(this.state.Category);
    fetch(AppURL.ProductListByCategory(category))
      .then((data) => data.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log("lllll");
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

      <Category Category={category} ProductData={products} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductCategoryPage;
