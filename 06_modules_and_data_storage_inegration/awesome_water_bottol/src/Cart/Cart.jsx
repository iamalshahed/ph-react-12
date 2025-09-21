import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="div_row">
      {cart.map((bottle, index) => (
        <div key={index}>
          <div className="cart_img_container">
            <img className="" src={bottle.img} alt="" />
            <button
              onClick={() => handleRemoveFromCart(bottle.id)}
              className="btn_delete"
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
