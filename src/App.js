import React, { useState, useEffect } from "react";
import { Title, StyledA } from "./Components/Title";
import CountryCard from "./Components/CountryCard";
import List from "./Components/List";
import Nav from "./Components/Nav";
import { StyledH6 } from "./Components/styling/Headings";
import { StyledButton } from "./Components/styling/Buttons";
import Search from "./Components/Search";
import Test from "./Components/Test";
import { CardSearchContainer } from "./Components/styling/Containers";
import StyledFooter from "./Components/Footer";
import { defaultSearch } from "./utils/API";
import * as Vibrant from "node-vibrant";
import { lighten, darken } from "polished";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../src/Components/styling/globalStyles";
import { useLocalStorage } from "./useLocalStorage";
import { deburr } from "lodash";

function App() {
  const [countryData, setCountryData] = useLocalStorage("countryData", []);
  const [filteredCountryData, setFilteredCountryData] = useState([countryData]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentCountry, setCurrentCountry] = useState({
    name: null,
    capital: null,
    flag: null,
    otherNames: null,
  });

  const [accentColors, setAccentColors] = useState({});
  const [coloursLoading, setColoursLoading] = useState(false);

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
    if (countryData.length === 0) {
      setLoading(true);
    }

    async function fetchData() {
      if (!ignore) {
        let result = null;

        try {
          result = await defaultSearch.get("/");
          setLoading(false);
        } catch (err) {
          console.error(err);
          setLoading(false);
        }

        const countries = result
          ? result.data
              .map(({ name, capital, flags, altSpellings }) => {
                const capitalCity = capital ? capital.join(", ") : null;
                const alternativeNames = [name.official, ...altSpellings];

                if (name.nativeName) {
                  Object.values(name.nativeName).forEach((e) =>
                    alternativeNames.push(e.official, e.common)
                  );
                }
                const allUniqueNames = Array.from(new Set(alternativeNames));

                return {
                  name: name.common,
                  capital: capitalCity,
                  flag: flags.png,
                  otherNames: allUniqueNames,
                  allNames: [name.official, ...allUniqueNames].join(","),
                };
              })
              .sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
              })
          : [];

        setCountryData(countries);
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [setCountryData, countryData]);

  useEffect(() => {
    setColoursLoading(true);
    if (currentCountry.flag) {
      Vibrant.from(currentCountry.flag).getPalette((err, palette) => {
        const paletteColors = {
          DarkMuted: RGBToHex(palette.DarkMuted._rgb),
          DarkVibrant: RGBToHex(palette.DarkVibrant._rgb),
          DarkVibrantContrast: lighten(0.2, RGBToHex(palette.DarkVibrant._rgb)),
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
        setColoursLoading(false);
      });
    } else {
      setColoursLoading(false);
    }
  }, [currentCountry]);

  useEffect(() => {
    const tempFilteredCountryData = [...countryData].filter(({ allNames }) => {
      const deburredNames = deburr(allNames).toLocaleLowerCase();
      const deburredSearchText = deburr(searchText).toLocaleLowerCase();
      return deburredNames.includes(deburredSearchText);
    });

    setFilteredCountryData(tempFilteredCountryData);
  }, [searchText, countryData]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter className='browser-router'>
        <div className='App'>
          <StyledA href='/' alt='Country Tester Home'>
            <Title>Country Tester</Title>
          </StyledA>
          <Nav></Nav>
          <Switch>
            <Route exact path='/'>
              <CardSearchContainer>
                {currentCountry.name !== null && (
                  <CountryCard
                    currentCountry={currentCountry}
                    accentColors={accentColors}
                    coloursLoading={coloursLoading}
                  />
                )}

                <Search setSearchText={setSearchText} searchText={searchText} />
              </CardSearchContainer>

              <List
                setCurrentCountry={setCurrentCountry}
                countryData={filteredCountryData}
                currentCountry={currentCountry}
                loading={loading}
                setColoursLoading={setColoursLoading}
              />
            </Route>
            <Route exact path='/test'>
              <Test
                countryData={countryData}
                accentColors={accentColors}
                currentCountry={currentCountry}
                setCurrentCountry={setCurrentCountry}
                coloursLoading={coloursLoading}
                setColoursLoading={setColoursLoading}
              />
            </Route>
            <Route path='/'>
              <StyledH6>Page not found. </StyledH6>
              <StyledButton>
                <a href='/' alt='Home'>
                  Return to homepage
                </a>
              </StyledButton>
              <div style={{ flexGrow: 10 }}></div>
            </Route>
          </Switch>
          <StyledFooter />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
