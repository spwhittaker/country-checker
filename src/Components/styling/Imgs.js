import styled from "styled-components";

export const QuizImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow: hidden;
  margin: 0.3rem;
`;

export const StyledCardImg = styled.img`
  display: ${(props) => props.displayProp || "block"};
  padding: 0.3rem;
  margin: 0.5rem auto;
  max-width: 30vw;
  max-height: 15vh;
  height: "auto";
  overflow: hidden;
`;
