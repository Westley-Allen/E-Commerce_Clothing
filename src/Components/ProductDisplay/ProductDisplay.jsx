import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import toastr from "toastr"; // Import Toastr library
import "toastr/build/toastr.css"; // Import Toastr styles

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product.id);
    toastr.success("Item added to the cart successfully!"); // Success message
  };

  return (
    <div className="productDisplay">
      <div className="productDisplay__left">
        <div className="productDisplay__imageList">
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
          <img src={product.image} alt="productImage" />
        </div>
        <div className="productDisplay__image">
          <img
            className="productDisplay__mainImage"
            src={product.image}
            alt="productImage"
          />
        </div>
      </div>
      <div className="productDisplay__right">
        <h1>{product.name}</h1>
        <div className="productDisplay__rightStars">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <div className="productDisplay__rightPrices">
          <div className="productDisplay__oldPrice">${product.old_price}</div>
          <div className="productDisplay__newPrice">${product.new_price}</div>
        </div>
        <div className="productDisplay_rightDescription">
          {product.description}
        </div>
        <div className="productDisplay__rightSize">
          <h1>Select Size</h1>
          <div className="productDisplay__sizes"></div>
          <div>Small</div>
          <div>Medium</div>
          <div>Large</div>
          <div>Extra Large</div>
          <div>XXL</div>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <p className="productDisplay__rightCategory">
          <span>Category: </span>
          {product.category}, {product.clothingType}
        </p>
        <p className="productDisplay__rightCategory">
          <span>Tags: </span>
          {product.trendingWords.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
