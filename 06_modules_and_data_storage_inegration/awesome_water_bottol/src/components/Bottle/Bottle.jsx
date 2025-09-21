import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const {
    name,
    category,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
    shipping,
    quantity,
  } = bottle;

  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default Bottle;
