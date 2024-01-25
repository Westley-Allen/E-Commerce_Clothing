import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="breadcrumb">
      Home <img src={arrow_icon} alt="arrow_icon" />
      Shop <img src={arrow_icon} alt="arrow_icon" />
      {product.category} <img src={arrow_icon} alt="arrow_icon" />
      {product.name}
    </div>
  );
};

export default Breadcrumb;
