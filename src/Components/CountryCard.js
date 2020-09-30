import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: auto;
  max-width: 700px;
  min-width: 50vw;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  background: #808080;
  position: sticky;
  top: 1rem;
`;
export default function CountryCard({
  showCapital,
  showCountry,
  showFlag,
  currentCountry: { name, capital, flag, otherNames },
}) {
  return (
    <StyledCard>
      <h1>{name}</h1>
      <h3>Capital: {capital}</h3>
      <img
        src={flag}
        alt={`${name} flag`}
        style={{ width: "200px", height: "auto" }}
      />
      <div>
        <h4>Other names</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {otherNames.map((altName, index) => {
            return (
              <p
                key={index}
                style={{
                  padding: "3px",
                  border: "1px solid black",
                  flexBasis: "25%",
                  flexGrow: 1,
                }}
              >
                {altName}
              </p>
            );
          })}
        </div>
      </div>
    </StyledCard>
  );
}
