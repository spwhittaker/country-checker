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
}) {
  return names.length === 0 ? (
    <StyledH6>
      {loading
        ? "Loading..."
        : "Nothing to see here, please try another search."}
    </StyledH6>
  ) : (
    <StyledCountriesList>
      {names.map((name, index) => (
        <CountryDiv key={index}>
          <StyledP>{name}</StyledP>
          <StyledButton
            narrowMaxHeight={"30px"}
            narrowMinHeight={"30px"}
            onClick={(e) => {
              e.preventDefault();
              const newCountry = countryData.filter(
                (country) => country.name === name
              );

              setCurrentCountry(newCountry[0]);
            }}
          >
            More info
          </StyledButton>
        </CountryDiv>
      ))}
    </StyledCountriesList>
  );
}
