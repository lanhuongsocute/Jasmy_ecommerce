import React, { Component, Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import SuggestedProduct from "./SuggestedProduct";
import ReviewList from "./ReviewList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


import ReactDOM from "react-dom";
import AppURL from "../../api/AppURL";
import { useSelector } from "react-redux";
const ProductDetails = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [combos, setCombos] = useState([]);
  const [comboName, setComboName] = useState("");
  const [comboIndex, setComboIndex] = useState(1);
  const [isSize, setIsSize] = useState(null);
  const [isColor, setIsColor] = useState(null);
  const [scolor, setColor] = useState("");
  const [ssize, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [atcLabel, setAtcLable] = useState("Add To Cart");
 const navigate = useNavigate();

  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    // Load combos from sessionStorage on component mount
    const storedCombos = sessionStorage.getItem("productCombos");
    if (storedCombos) {
      setCombos(JSON.parse(storedCombos));
    }
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle creating a new combo
  const handleCreateCombo = () => {
    if (combos.length < 3) {
      const newCombo = {
        name: `Combo${comboIndex}`,
        items: []
      };
      setCombos([...combos, newCombo]);
      setComboIndex(comboIndex + 1);
      sessionStorage.setItem("productCombos", JSON.stringify([...combos, newCombo]));
    } else {
      toast.error("You can create maximum 3 combos per session.");
    }
  };

  // Handle adding product to selected combo
  const handleAddToCombo = (comboName) => {
    if (isColor === "YES" && scolor.length === 0) {
      toast.error("Please Select Color");
    } else if (isSize === "YES" && ssize.length === 0) {
      toast.error("Please Select Size");
    } else if (quantity.length === 0) {
      toast.error("Please Select Quantity");
    } else {
      const formData = {
        price:price,
        special_price:special_price,
        color: scolor,
        size: ssize,
        quantity: quantity,
        product_code: product_code,
        email: userData.user ? userData.user.email : "N/A",
      };

      fetch(AppURL.addToCart, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data === 1) {
            toast.success("Product Added Successfully");

            const updatedCombos = combos.map((combo) =>
              combo.name === comboName
                ? {
                    ...combo,
                    items: [
                      ...combo.items,
                      {
                        product_id: product_id,
                        price:price,
                        special_price:special_price,
                        quantity: quantity,
                        color: scolor,
                        size: ssize,
                        product_code: product_code,
                      },
                    ],
                  }
                : combo
            );

            setCombos(updatedCombos);
            sessionStorage.setItem("productCombos", JSON.stringify(updatedCombos));
          } else {
            toast.error("Your Request is not done ! Try Again");
          }
        })
        .catch((error) => {
          toast.error("Your Request is not done ! Try Again");
          console.log(error);
        });
    }
  };

   const redirectToPackages = () => {
    // Lưu combos vào sessionStorage
    sessionStorage.setItem("productCombos", JSON.stringify(combos));
    // Chuyển hướng đến trang Packages_Products
    navigate("/packages-products"); 
  };
  //const { userData } = useSelector((state) => state.user);
  console.log(data);

  //data nay la object gom {detail: {}, product: {}}
  function imgOnClick(event) {
    let imgSrc = event.target.getAttribute("src");
    let previewImg = document.getElementById("previewImg");
    ReactDOM.findDOMNode(previewImg).setAttribute("src", imgSrc);
  }
  // const [isSize, setIsSize] = useState(null);
  // const [isColor, setIsColor] = useState(null);
  // const [scolor, setColor] = useState(""); //scolor = state color de phan biet bien color ben duoi
  // const [ssize, setSize] = useState(""); //ssize = state size
  // const [quantity, setQuantity] = useState("");
  // const [atcLabel, setAtcLable] = useState("Add To Cart");
  let ProductAllData = data ?? {};

  let title = ProductAllData["product"]
    ? ProductAllData["product"][0]["title"]
    : "";
  let brand = ProductAllData["product"]
    ? ProductAllData["product"][0]["brand"]
    : "";
  let category = ProductAllData["product"]
    ? ProductAllData["product"][0]["category"]
    : "";
  let subcategory = ProductAllData["product"]
    ? ProductAllData["product"][0]["subcategory"]
    : "";
  let image = ProductAllData["product"]
    ? ProductAllData["product"][0]["image"]
    : "";
  let price = ProductAllData["product"]
    ? ProductAllData["product"][0]["price"]
    : "";
  let product_code = ProductAllData["product"]
    ? ProductAllData["product"][0]["product_code"]
    : "";
  let remark = ProductAllData["product"]
    ? ProductAllData["product"][0]["remark"]
    : "";
  let special_price = ProductAllData["product"]
    ? ProductAllData["product"][0]["special_price"]
    : "";
  let star = ProductAllData["product"]
    ? ProductAllData["product"][0]["star"]
    : "";

  let image_one = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["image_1"]
    : "";
  let image_two = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["image_2"]
    : "";
  let image_three = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["image_3"]
    : "";
  let image_four = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["image_4"]
    : "";
  let color = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["color"]
    : "";
  let size = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["size"]
    : "";
  let product_id = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["product_id"]
    : "";
  let short_description = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["short_description"]
    : "";
  let long_description = ProductAllData["detail"]
    ? ProductAllData["detail"][0]["long_description"]
    : "";

  var ColorDiv = "d-none"; //class cho vung hien thi mau sac - neu ko co thi an di
  if (color !== "na") {
    let ColorArray = color.split(",");
    var ColorOption = ColorArray.map((ColorList, i) => {
      return <option value={ColorList}> {ColorList} </option>;
    });
    ColorDiv = "";
  } else {
    ColorDiv = "d-none";
  }

  var SizeDiv = "d-none";
  if (size != "na") {
    let SizeArray = size.split(",");
    var SizeOption = SizeArray.map((SizeList, i) => {
      return <option value={SizeList}> {SizeList} </option>;
    });
    SizeDiv = "";
  } else {
    SizeDiv = "d-none";
  }

  const colorOnChange = (event) => {
    let color = event.target.value;
    // alert(color);
    setColor(color);
  };

  const sizeOnChange = (event) => {
    let size = event.target.value;
    // alert(size);
    setSize(size);
  };

  const quantityOnChange = (event) => {
    let quantity = event.target.value;
    setQuantity(quantity);
  };

  const PriceOption = (price, special_price) => {
    if (special_price == "na") {
      return <p className="product-price-on-card"> Price : {price}đ </p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">{price}đ </strike>{" "}
          {special_price}đ
        </p>
      );
    }
  };

  if (isSize === null) {
    if (size != "na") {
      setIsSize("YES");
    } else {
      setIsSize("NO");
    }
  }

  if (isColor === null) {
    if (color != "na") {
      setIsColor("YES");
    } else {
      setIsColor("NO");
    }
  }

  const addToCart = () => {
    if (isColor === "YES" && scolor.length === 0) {
      toast.error("Please Select Color");
    } else if (isSize === "YES" && ssize.length === 0) {
      toast.error("Please Select Size");
    } else if (quantity.length === 0) {
      toast.error("Please Select Quantity");
    } else if (!localStorage.getItem("token")) {
      toast.warn("Please You have to Login First");
    } else {
      setAtcLable("Adding...");
      const formData = {
        color: scolor,
        size: ssize,
        quantity: quantity,
        product_code: product_code,
        email: userData.user ? userData.user.email : "N/A", //cai nay lay tu localstorage len sau
      };
      console.log(formData);
      fetch(AppURL.addToCart, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          if (data === 1) {
            toast.success("Product Added Successfully");
            setAtcLable("Add To Cart");

            // this.setState({PageRefreshStatus:true})
          } else {
            toast.error("Your Request is not done ! Try Aagain", {
              position: "top-right",
            });
            setAtcLable("Add To Cart");
          }
        })
        .catch((error) => {
          toast.error("Your Request is not done ! Try Aagain");
          setAtcLable("Add To Cart");
          console.log(error);
        });
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="BetweenTwoSection">
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white pb-3 mt-4"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row>
              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                <img id="previewImg" className="bigimage" src={image_one} />{" "}
                <Container className="my-3">
                  <Row>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_one}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_two}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_three}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_four}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                <h5 className="Product-Name">{title}</h5>
                <h6 className="section-sub-title">{short_description}</h6>
                {/* <div className="input-group">
                  <div className="Product-price-card d-inline ">
                    Reguler Price ${price}
                  </div>
                  <div className="Product-price-card d-inline ">
                    50% Discount
                  </div>
                  <div className="Product-price-card d-inline ">
                    New Price ${special_price}
                  </div>
                </div> */}
                {PriceOption(price, special_price)}
                <h6 className="mt-2">
                  Category : <b>{category}</b>{" "}
                </h6>
                <h6 className="mt-2">
                  SubCategory : <b>{subcategory}</b>
                </h6>
                <h6 className="mt-2">
                  Brand : <b>{brand}</b>
                </h6>
                <h6 className="mt-2">
                  Product Code : <b>{product_code}</b>
                </h6>

                <div className={ColorDiv}>
                  <h6 className="mt-2"> Choose Color </h6>
                  <select
                    className="form-control form-select"
                    onChange={colorOnChange}
                  >
                    <option>Choose Color</option>
                    {ColorOption}
                  </select>
                </div>

                <div className={SizeDiv}>
                  <h6 className="mt-2"> Choose Size </h6>
                  <select
                    className="form-control form-select"
                    onChange={sizeOnChange}
                  >
                    <option>Choose Size</option>
                    {SizeOption}
                  </select>
                </div>

                <div className="">
                  <h6 className="mt-2"> Choose Quantity </h6>
                  <select
                    className="form-control form-select"
                    onChange={quantityOnChange}
                  >
                    <option>Choose Quantity</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="input-group mt-3">
                  <button className="btn site-btn m-1 " onClick={handleShowModal}>
                    {" "}
                    <i className="fa fa-shopping-cart"></i> Tạo gói thêm sản phẩm
                  </button>
                  <button className="btn btn-primary m-1" onClick={redirectToPackages}>
                    {" "}
                    <i className="fa fa-car"></i> Mua ngay
                  </button>
                  <button className="btn site-btn m-1 " onClick={addToCart}>
                    {" "}
                    <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                  </button>
                  <button className="btn btn-primary m-1">
                    {" "}
                    <i className="fa fa-heart"></i> Yêu thích
                  </button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="" md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">DETAILS</h6>
                <p>{long_description}</p>
              </Col>

              <Col className="" md={6} lg={6} sm={12} xs={12}>
                {data && data.reviews && <ReviewList reviews={data.reviews} />}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {data && data.product && data.product[0].subcategory && (
        <SuggestedProduct subcategory={data.product[0].subcategory} />
      )}

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
       {/* Modal for creating and managing combos */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Combo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bạn được tạo tối đa 3 combo. Và thêm sản phẩm tùy thích vào combo</p>
          {combos.map((combo, index) => (
            <div key={index}>
              <p>{combo.name}</p> 
              <ul>
                {combo.items.map((item, idx) => (
                  <li key={idx}>{item.product_id} - {item.price} -  {item.special_price} - {item.quantity} - {item.color} - {item.size} - {item.product_code}</li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => handleAddToCombo(combo.name)}>
                Add Product to {combo.name}
              </button>
            </div>
          ))}
          {combos.length < 3 && (
            <button className="btn btn-success mt-2" onClick={handleCreateCombo}>
              Create New Combo
            </button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ProductDetails;
