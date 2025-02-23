import React, { Fragment, useEffect, useState } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import CartList from "../components/Cart/CartList";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";

const PackageListPage = () => {
  const { id } = useParams(); // Get id from route params
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    window.scroll(0, 0);

    setLoading(true); // Set loading state before fetching data

    fetch(AppURL.viewCart(id))
      .then((data) => data.json())
      .then((data) => {
        setProductData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Handle error and set loading to false
      });
  }, [id]);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      {loading ? (
        <p>Loading...</p> // Display a loading indicator while fetching data
      ) : (
        <CartList data={productData} /> // Pass fetched data to CartList component
      )}

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default PackageListPage;
