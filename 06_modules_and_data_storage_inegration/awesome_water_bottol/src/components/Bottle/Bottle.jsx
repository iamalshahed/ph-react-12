import React, { useEffect, useState } from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const [isDisabled, setIsDisAbled] = useState(false);
  const { name, category, price, stock, img } = bottle;

  useEffect(() => {
    stock < 1 && setIsDisAbled(true);
  });

  return (
    <div className="card_container">
      {/* image */}
      <div className="">
        <img src={img} alt="" />
      </div>

      {/* content */}
      <div className="card_content">
        {/* price */}
        <div className="card_top_content">
          <span className="price">$ {price}</span>
          <p className="original_price">$ {price} Original price</p>
        </div>

        {/* names */}
        <div className="">
          <h3>{name}</h3>
          <div className="row">
            <span className="category">{category}</span>
            <p className={`${stock > 0 ? "in_stock" : "out_of_stock"}`}>
              {stock > 0 ? `${stock} Remaining` : `Out of stock`}
            </p>
          </div>
        </div>
      </div>

      <div className="btn__cart">
        <button disabled={isDisabled} onClick={() => handleAddToCart(bottle)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Bottle;
