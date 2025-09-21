import React, { use } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      {bottles.map((bottle, index) => (
        <Bottle key={index} bottle={bottle}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
