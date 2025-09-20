import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    /* // basic/first system
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    */

    // second system
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className="">
      <a
        target="_blank"
        href={`https://www.google.com/search?q=${country.name.common}`}
        className={`box ${visited && "if_visited"}`}
      >
        <div>
          <img
            className="flag_img"
            src={country?.flags?.flags?.png}
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
      </a>

      <button className={`${visited && "btn_visited"}`} onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country);
        }}
      >
        Add Flag
      </button>
    </div>
  );
};

export default Country;
