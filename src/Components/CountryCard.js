import React from "react";
import { StyledCard, OtherNamesContainer } from "./styling/Divs";
import { StyledCardImg } from "./styling/Imgs";

export default function CountryCard({
  currentCountry: { name, capital, flag, otherNames },
  accentColors,
  coloursLoading,
}) {
  if (name !== null && !coloursLoading) {
    return (
      <StyledCard accentColors={accentColors}>
        <h1>{name}</h1>
        {capital && <h3>Capital: {capital}</h3>}
        <StyledCardImg
          accentColors={accentColors}
          src={flag}
          alt={`${name} flag`}
        />
        {otherNames.length > 0 && (
          <OtherNamesContainer style={{ margin: "5px auto" }}>
            <h4>Other names</h4>
            <div>
              {otherNames.map((altName, index) => {
                return <p key={index}>{altName}</p>;
              })}
            </div>
          </OtherNamesContainer>
        )}
      </StyledCard>
    );
  }
  return null;
}
