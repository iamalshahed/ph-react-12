import React from "react";

const Country = ({ country }) => {
  const flag = {
    width: "100px",
    height: "auto",
  };

  const flex = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  return (
    <div>
      <div style={flex}>
        <div>
          <img
            style={flag}
            src={country.flags.flags.png}
            alt={country.flags.flags.alt}
          />
        </div>
        <div className="">
            <h3>{country.name.common}</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Country;
