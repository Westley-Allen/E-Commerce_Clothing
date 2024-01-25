import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          onClick={window.scrollTo(0, 0)}
          alt="itemImage"
        />
      </Link>
      <p>{props.name}</p>
      <div className="item__prices">
        <div className="item__price__new">${props.new_price}</div>
        <div className="item__price__old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
