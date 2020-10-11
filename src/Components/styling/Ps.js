import styled from "styled-components";

export const StyledP = styled.p`
  color: black;
  flex-grow: ${(props) => props.flexGrow || "1"};
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
