import React, { Fragment, useEffect, useState } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";

const ProductDetailsPage = () => {
  const { id } = useParams(); //lay id tu route
  const [productData, setProductData] = useState();
  console.log(id);
  //tuong duong ComponentDidMount
  useEffect(() => {
    window.scroll(0, 0);

    //lay id
    //goi api
    fetch(AppURL.ProductDetails(id))
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((error) => console.log(error));
    //truyen vao component
  }, [id]); //id thay doi thi goi lại du lieu de hien thi - neu hong no chi chay 1 lan, doi id nó ko load lai du lieu

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <ProductDetails data={productData} />
      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductDetailsPage;
