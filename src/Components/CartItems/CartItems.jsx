import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toastr.success("Item removed successfully", { timeOut: 2000 }); // Show success message
  };

  return (
    <div className="cartItems">
      <div className="cartItems__formatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems_format cartItems__formatMain">
                <img
                  className="cartIcon__productItem"
                  src={e.image}
                  alt="productImage"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems_quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    handleRemoveFromCart(e.id); // Use the modified function
                  }}
                  src={remove_icon}
                  alt="remove_icon"
                  className="cartItems_removeIcon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems__down">
        <div className="cartItems__total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItem__totalItem">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem__totalItem">
              <p>Shipping Free</p>
              <p>Free</p>
              <hr />
              <div className="cartItem__totalItem">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cartItems__promCode">
            <p>Enter promo code here!!!</p>
            <div className="cartItem__promoBox">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
