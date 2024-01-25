import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Access Exclusive Promotions Via Email</h1>
      <p>Stay Informed by Subscribing to our Newsletter!</p>
      <div>
        <input type="email" placeholder="Enter Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
