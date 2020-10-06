import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: auto;
  padding: 0.4rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0.2rem;
  }

  &:hover {
    box-sizing: border-box;
    background-color: white;

    color: #4caf50;
  }
`;
const StyledDiv = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  min-height: 50px;

  margin: 0.2rem;
  padding: 0.2rem;
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    margin: 0.1rem;
    padding: 0.15rem;
  }
  @media screen and (max-width: 450px) {
    padding: 0.1rem;
  }
  background-image: linear-gradient(
    to left top,
    #fff6fb,
    #f8f1f6,
    #f1edf1,
    #eae8eb,
    #e4e3e5,
    #e4e3e6,
    #e3e4e6,
    #e2e4e7,
    #e4eaef,
    #e6f1f6,
    #e7f8fb,
    #e9fffe
  );
`;
const StyledP = styled.p`
  color: black;
  flex-grow: 1;
  text-align: center;
  font-size: 1.1rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
    margin: 0.3rem;
  }
`;
const StyledList = styled.div`
  display: grid;
  max-width: 12in;
  justify-content: flex-start;

  margin: 1rem auto auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . .";
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . .";
  }
`;

export const StyledH6 = styled.h6`
  font-size: 1.5rem;
  color: rgba(56, 62, 235, 1);
  flex-grow: 1;
  font-family: "Domine", sans-serif;
  align-self: flex-start;
  margin: 1rem 1rem auto 1rem;
`;

export default function List({
  names,
  setCurrentCountry,
  countryData,
  currentCountry,
  setAccentColors,
}) {
  return names.length === 0 ? (
    <StyledH6>Nothing to see here, please try another search.</StyledH6>
  ) : (
    <StyledList>
      {names.map((name, index) => (
        <StyledDiv key={index}>
          <StyledP>{name}</StyledP>
          <StyledButton
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
        </StyledDiv>
      ))}
    </StyledList>
  );
}
