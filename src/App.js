import React, { useState, useEffect } from "react";
import Title from "./Components/Title";
import CountryCard from "./Components/CountryCard";
import List from "./Components/List";
import "./App.css";
import API from "./utils/API";

function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    flag: "https://restcountries.eu/data/gbr.svg",
    otherNames: ["GB", "UK", "Great Britain"],
  });
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await API.get("/");
      if (!ignore) {
        const names = result.data.map((country) => country.name);
        const countries = result.data.map(
          ({ name, capital, flag, altSpellings }) => {
            return { name, capital, flag, otherNames: [...altSpellings] };
          }
        );
        console.log(countries);
        setCountryNames(names);
        // setCountryData(countries);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="App">
      <Title>Country information</Title>
      <CountryCard currentCountry={currentCountry} />
      <List names={countryNames} />
    </div>
  );
}

export default App;
