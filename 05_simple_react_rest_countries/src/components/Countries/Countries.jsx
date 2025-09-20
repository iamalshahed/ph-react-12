import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedFlags, setVisitedFlags] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>Total Countries Visited: {visitedCountries.length}</h2>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      {visitedFlags.map((flag, index) => (
        <img key={index} src={flag.flags.flags.png} alt="" />
      ))}
      <div className="grid">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
