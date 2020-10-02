import React, { useState, useEffect } from "react";
import Title from "./Components/Title";
import CountryCard from "./Components/CountryCard";
import List from "./Components/List";
import "./App.css";
import API from "./utils/API";
import * as Vibrant from "node-vibrant";
import { lighten, darken } from "polished";

function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    flag: "https://restcountries.eu/data/gbr.svg",
    otherNames: ["GB", "UK", "Great Britain"],
  });

  const [accentColors, setAccentColors] = useState({});

  const RGBToHex = ([r, g, b]) => {
    r = Math.round(r).toString(16);
    g = Math.round(g).toString(16);
    b = Math.round(b).toString(16);
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    r = r.toUpperCase();
    g = g.toUpperCase();
    b = b.toUpperCase();
    return "#" + r + g + b;
  };

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

        setCountryNames(names);
        setCountryData(countries);
        Vibrant.from(currentCountry.flag).getPalette((err, palette) => {
          const paletteColors = {
            DarkMuted: RGBToHex(palette.DarkMuted._rgb),
            DarkVibrant: RGBToHex(palette.DarkVibrant._rgb),
            DarkVibrantContrast: lighten(
              0.2,
              RGBToHex(palette.DarkVibrant._rgb)
            ),
            DarkerMuted: darken(0.1, RGBToHex(palette.DarkMuted._rgb)),
            DarkestMuted: darken(0.2, RGBToHex(palette.DarkMuted._rgb)),
            LightMuted: RGBToHex(palette.LightMuted._rgb),
            LightVibrant: RGBToHex(palette.LightVibrant._rgb),
            LighterMuted: lighten(0.3, RGBToHex(palette.LightMuted._rgb)),
            LightestMuted: lighten(0.5, RGBToHex(palette.LightMuted._rgb)),
            Muted: RGBToHex(palette.Muted._rgb),
            Vibrant: RGBToHex(palette.Vibrant._rgb),
          };
          setAccentColors(paletteColors);
        });
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [currentCountry]);

  return (
    <div className="App">
      <Title>Country Checker</Title>

      <CountryCard
        currentCountry={currentCountry}
        accentColors={accentColors}
      />

      <List
        names={countryNames}
        setCurrentCountry={setCurrentCountry}
        countryData={countryData}
        currentCountry={currentCountry}
      />
    </div>
  );
}

export default App;
