import React from "react";
import styled from "styled-components";

export const StyledImg = styled.img`
  display: block;
  padding: 0.3rem;
  margin: 0.5rem auto;
  max-width: 30vw;
  max-height: 15vh;
  height: "auto";
`;

const StyledCard = styled.div`
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    h1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-aspect-ratio: 7
    /9) {
    flex-direction: row;
    align-items: center;
  }

  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 700px;

  @media screen and (min-aspect-ratio: 7
    /9) {
    max-width: 1400px;
  }
  min-width: 50vw;
  border: 5px solid ${(props) => props.accentColors.Vibrant || "black"};

  background: ${(props) => props.accentColors.LighterMuted || "white"};

  h1 {
    font-size: 2rem;
    line-height: 1;
    margin: 0.5rem;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
    @media screen and (min-aspect-ratio: 7/9) {
      font-size: 1.2rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin: 0.5rem;
    align-self: center;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-aspect-ratio: 7
    /9) {
      font-size: 1rem;
    }
  }
  > div {
    margin-top: 1rem;
    padding: 0.5rem;
    margin: auto;
    border: ${(props) => props.accentColors.DarkVibrant || "white"} 1px solid;
    background-color: ${(props) => props.accentColors.LightestMuted || "white"};
  }
  h4 {
    font-size: 1.75rem;
    line-height: 1;
    margin: 1rem 1rem 0 1rem;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-aspect-ratio: 7
    /9) {
      font-size: 1rem;
    }
  }

  * {
    color: ${(props) => props.accentColors.DarkerMuted || "black"};
  }

  div {
    margin: 0.15rem auto;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
    }
    p {
      border: ${(props) => props.accentColors.Vibrant || "black"} 2px solid;
      text-align: center;
      padding: 0.5rem 0.4rem;
      font-size: 1rem;
      flex: 1;
      width: 25%;
      margin: 0.2rem 0;
      font-weight: 900;
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
      }
      @media screen and (min-aspect-ratio: 7
    /9) {
        font-size: 0.7rem;
        margin: 0.15rem;
      }
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
      <StyledImg src={flag} alt={`${name} flag`} />
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
