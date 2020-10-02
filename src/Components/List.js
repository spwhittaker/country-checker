import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: auto;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const StyledDiv = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  justify-content: center;
  padding: 2px;
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
`;
const StyledList = styled.div`
  display: grid;
  margin: 3px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3px 3px;
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
`;
export default function List({
  names,
  setCurrentCountry,
  countryData,
  currentCountry,
  setAccentColors,
}) {
  return (
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
