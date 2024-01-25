import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__left">
        <h1>Exclusive Offers!</h1>
        <h1>Offers for you</h1>
        <p>Best Sellers!</p>
        <button>Check Now</button>
      </div>
      <div className="offers__right"></div>
      <img src={exclusive_image} alt="exclusiveImage" />
    </div>
  );
};
