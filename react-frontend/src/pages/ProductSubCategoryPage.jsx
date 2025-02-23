import React, { Component, useEffect, useState } from "react";
import { Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import SubCategory from "../components/ProductDetails/SubCategory";
import { useParams } from "react-router-dom";

const ProductSubCategoryPage = () => {
  //   constructor({ match }) {
  //     super();
  //     this.state = {
  //       Category: match.params.category,
  //       SubCategory: match.params.subcategory,
  //       ProductData: [],
  //     };
  //   }
  const { subcategory, category } = useParams();
  console.log(subcategory);
  console.log(category);
  //   const {subcategory} = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    // alert(this.state.Category);
    fetch(AppURL.ProductListBySubCategory(category, subcategory))
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setProducts(response);
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

      <SubCategory
        Category={category}
        SubCategory={subcategory}
        ProductData={products}
      />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductSubCategoryPage;
