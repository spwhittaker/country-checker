import styled from "styled-components";

export const QuizImg = styled.img`
  display: inline-block;

  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  vertical-align: middle;
`;

export const StyledCardImg = styled.img`
  display: ${(props) => props.displayProp || "block"};
  padding: 5px;
  margin: 15px;
  max-width: 25vw;
  height: "auto";
  overflow: hidden;
  border: solid 2px ${(props) => props.accentColors.DarkerMuted || "#505050"};
  border-radius: 3px;
`;
