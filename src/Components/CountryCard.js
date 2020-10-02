import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: sticky;
  top: 1rem;
  margin: auto;
  text-align: center;
  max-width: 700px;
  min-width: 50vw;
  border: 5px solid ${(props) => props.accentColors.Vibrant || "black"};
  border-radius: 3px;
  padding: 1rem;
  background: ${(props) => props.accentColors.LighterMuted || "white"};
  img {
    border: 2px solid black;
    display: block;
    margin: auto;
    width: 30%;
    height: "auto";
  }
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  > div {
    margin-top: 1rem;
    padding: 0.5rem;
    border: ${(props) => props.accentColors.DarkVibrant || "white"} 1px solid;
    background-color: ${(props) => props.accentColors.LightestMuted || "white"};
  }
  h4 {
    font-size: 1.75rem;
    line-height: 1;
    margin: 1rem 1rem 0 1rem;
  }

  * {
    color: ${(props) => props.accentColors.DarkerMuted || "black"};
  }

  div {
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
    }
    p {
      border: ${(props) => props.accentColors.Vibrant || "black"} 2px solid;
      text-align: center;
      padding: 1rem;
      font-size: 1.5rem;
      flex: 1;
      width: 25%;
      margin: 5px auto;
      font-weight: 900;
    }
  }
`;

export default function CountryCard({
  currentCountry: { name, capital, flag, otherNames },
  accentColors,
}) {
  return (
    <StyledCard accentColors={accentColors}>
      <h1>{name}</h1>
      {capital && <h3>Capital: {capital}</h3>}
      <img src={flag} alt={`${name} flag`} />
      {otherNames.length > 0 && (
        <div>
          <h4>Other names</h4>
          <div>
            {otherNames.map((altName, index) => {
              return <p key={index}>{altName}</p>;
            })}
          </div>
        </div>
      )}
    </StyledCard>
  );
}
