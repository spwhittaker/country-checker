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
import { defaultSearch, nameSearch } from "./utils/API";
import * as Vibrant from "node-vibrant";
import { lighten, darken } from "polished";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../src/Components/styling/globalStyles";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [countryData, setCountryData] = useState([]);
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
  const [countryDataLocalStorage, setCountryDataLocalStorage] = useLocalStorage(
    "countryData",
    []
  );

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
    setLoading(true);
    setColoursLoading(true);
    async function fetchData() {
      if (!ignore) {
        let result = null;
        if (searchText === "") {
          try {
            result = await defaultSearch.get("/");
            setLoading(false);
          } catch (err) {
            console.error(err);
            setLoading(false);
          }
        } else {
          try {
            result = await nameSearch.get(`/${searchText}`);
            setLoading(false);
          } catch (err) {
            console.error(err);
            setLoading(false);
          }
        }

        const names = result
          ? result.data
              .map((country) => country.name.common)
              .sort((a, b) => {
                const textA = a.toUpperCase();
                const textB = b.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
              })
          : [];
        const countries = result
          ? result.data
              .map(({ name, capital, flags, altSpellings }) => {
                const capitalCity = capital ? capital.join(", ") : null;
                const allNames = [name.official, ...altSpellings];

                if (name.nativeName) {
                  Object.values(name.nativeName).forEach((e) =>
                    allNames.push(e.official, e.common)
                  );
                }
                const allUniqueNames = Array.from(new Set(allNames));

                return {
                  name: name.common,
                  capital: capitalCity,
                  flag: flags.png,
                  otherNames: allUniqueNames,
                };
              })
              .sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
              })
          : [];

        setCountryNames(names);
        setCountryData(countries);
      }
    }
    fetchData(searchText);

    return () => {
      ignore = true;
    };
  }, [currentCountry, searchText]);

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
                names={countryNames}
                setCurrentCountry={setCurrentCountry}
                countryData={countryData}
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
