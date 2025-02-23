import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

const ReviewList = ({ reviews }) => {
  console.log(reviews);

  // componentDidMount() {
  //   let code = this.props.code;
  //   console.log(code);
  //   fetch(AppURL.ReviewList(code))
  //     .then((data) => data.json())
  //     .then((response) => {
  //       this.setState({ ReviewData: response.data });
  //     })
  //     .catch((error) => {});
  // }

  if (reviews.length > 0) {
    const MyView = reviews.map((ReviewList, i) => {
      if (ReviewList.reviewer_rating === "1") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
              <span className="text-success">
                <i className="fa fa-star"></i>{" "}
              </span>{" "}
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      } else if (ReviewList.reviewer_rating === "2") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
              </span>{" "}
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      } else if (ReviewList.reviewer_rating === "3") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i>{" "}
              </span>{" "}
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      } else if (ReviewList.reviewer_rating === "4") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
              </span>{" "}
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      } else if (ReviewList.reviewer_rating === "5") {
        return (
          <div>
            <p className=" p-0 m-0">
              <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
              <span className="text-success">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>{" "}
              </span>{" "}
            </p>
            <p>{ReviewList.reviewer_comments}</p>
          </div>
        );
      } // end else if
    }); // end map

    return (
      <div>
        <h6 className="mt-2">REVIEWS</h6>

        {MyView}
      </div>
    );
  } else {
    return (
      <div>
        <h6 className="mt-2">REVIEWS</h6>

        <p>There have no review Yet </p>
      </div>
    );
  }
};

export default ReviewList;
