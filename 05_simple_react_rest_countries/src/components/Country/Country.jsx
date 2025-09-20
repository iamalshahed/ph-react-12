import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  return (
    <a
      target="_blank"
      href={`https://www.google.com/search?q=${country.name.common}`}
      className=""
    >
      <div className="box">
        <div>
          <img
            className="flag_img"
            src={country.flags.flags.png}
            alt={country.flags.flags.alt}
          />
        </div>
        <div className="">
          <h3>{country.name.common}</h3>
          <p>
            <small>
              {country.area.area >= 200000 ? "Big Country" : "Small Country"}
            </small>
            <br />
            <small>Capital: {country.capital.capital}</small>
          </p>
        </div>
      </div>

      <button>Visit</button>
      {/* <hr /> */}
    </a>
  );
};

export default Country;
