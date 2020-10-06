import styled from "styled-components";
import React from "react";
import { StyledButton } from "./List";

const StyledSpan = styled.span`
  background: rgba(256, 256, 256, 0.3);
  display: inline;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  * {
    flex: 1;
    margin: 0.5rem;
  }
`;
const Test = () => {
  return (
    <>
      <h1>Test your knowledge of countries, capitals and flags.</h1>
      <StyledSpan>
        <StyledButton>Capitals</StyledButton>
        <StyledButton>Flags</StyledButton>
        <StyledButton>Countries</StyledButton>
      </StyledSpan>
      <div style={{ flexGrow: 10 }}></div>
    </>
  );
};

export default Test;
