import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addtoStoredCart, getStoredCart } from "../../utilities/localstorage";

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlePromise);

  useEffect(() => {
    const storedCartIds = getStoredCart();
    // console.log(storedCartIds, bottles);

    const storedCart = [];

    for (const id of storedCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save the bottle id to the localStorage
    addtoStoredCart(bottle.id);
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
