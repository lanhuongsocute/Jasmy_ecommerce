import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ data }) => {
  const MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  const CatList = data;
  // console.log(CatList);

  const MyView = CatList.map((CatList, i) => {
    return (
      <div key={i.toString()}>
        <button onClick={MenuItemClick} className="accordion">
          <img className="accordionMenuIcon" src={CatList.category_image} />
          &nbsp; {CatList.category_name}
        </button>
        <div className="panel">
          <ul>
            {CatList.subcategory.map((SubList, i) => {
              return (
                <li>
                  <Link
                    to={
                      "productsubcategory/" +
                      CatList.category_name +
                      "/" +
                      SubList.subcategory_name
                    }
                    className="accordionItem"
                  >
                    {SubList.subcategory_name}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">{MyView}</div>
    </div>
  );
};
export default MegaMenu;
