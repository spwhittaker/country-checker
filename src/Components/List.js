import React from "react";
import { StyledH6 } from "./styling/Headings";
import { StyledButton } from "./styling/Buttons";
import { CountryDiv, StyledCountriesList } from "./styling/Divs";
import { StyledP } from "./styling/Ps";

export default function List({
  names,
  setCurrentCountry,
  countryData,
  currentCountry,
  setAccentColors,
  loading,
  setColoursLoading,
}) {
  return countryData.length === 0 ? (
    <StyledH6>
      {loading
        ? "Loading..."
        : "Nothing to see here, please try another search."}
    </StyledH6>
  ) : (
    <StyledCountriesList>
      {countryData.map((country, index) => (
        <CountryDiv key={index}>
          <StyledP>{country.name}</StyledP>
          <StyledButton
            narrowMaxHeight={"30px"}
            narrowMinHeight={"30px"}
            onClick={(e) => {
              e.preventDefault();

              if (currentCountry.name !== country.name) {
                setColoursLoading(true);
                setCurrentCountry(country);
              }
            }}
          >
            More info
          </StyledButton>
        </CountryDiv>
      ))}
    </StyledCountriesList>
  );
}
