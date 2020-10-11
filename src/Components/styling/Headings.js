import styled from "styled-components";

export const StyledH3 = styled.h3`
  display: inline-flex;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  margin: auto;
  max-width: ${(props) => props.h3Width || "25vw"};
  font-size: 1rem;
  text-align: center;
`;
export const StyledH6 = styled.h6`
  font-size: 1.5rem;
  color: rgba(56, 62, 235, 1);
  flex-grow: 1;
  font-family: "Domine", sans-serif;
  align-self: flex-start;
  margin: 1rem 1rem auto 1rem;
`;

export const StyledH1 = styled.h1`
  font-size: 20px;
  flex-shrink: 1;
`;
