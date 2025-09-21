import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlePromise);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div className="mt">
      <h2>Bottles: {bottles.length}</h2>
      <br />
      <p>Addeded To Cart: {cart.length}</p>
      <div className="bottle_container">
        {bottles.map((bottle, index) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={index}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
