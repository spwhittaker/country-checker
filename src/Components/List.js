import React from "react";
import styled from "styled-components";

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
  > p {
    border: solid 1px black;
    display: inline-flex;
    min-height: 50px;
    justify-content: center;
    padding: 2px;
  }
`;
export default function List({ names }) {
  return (
    <StyledList>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </StyledList>
  );
}
