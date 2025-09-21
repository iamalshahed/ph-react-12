import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addtoStoredCart, getStoredCart } from "../../utilities/localstorage";
import Cart from "../../Cart/Cart";

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

  const handleRemoveFromCart = (id) => {
    console.log("remove item from the cart", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
  };

  return (
    <div className="mt">
      <h2>Bottles: {bottles.length}</h2>
      <br />
      <p>Addeded To Cart: {cart.length}</p>
      <br />
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
