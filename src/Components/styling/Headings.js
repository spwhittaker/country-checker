import styled from "styled-components";

export const StyledH3 = styled.h3`
  display: inline-flex;
  justify-content: center;
  align-items: start;
  font-family: ${(props) => props.h3FontFamily || null};
  padding: ${(props) => props.h3Padding || "1rem"};
  max-width: ${(props) => props.h3Width || "25vw"};
  font-size: ${(props) => props.h3Font || "1rem"};
  min-height: ${(props) => props.h3MinHeight || null};
  text-align: center;
`;
export const StyledH6 = styled.h6`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryBlue};
  flex-grow: 1;
  font-family: "Prompt", sans-serif;
  align-self: flex-start;
  margin: 1rem 1rem auto 1rem;
`;

export const StyledH1 = styled.h1`
  flex-shrink: 1;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryGrey};
  flex-grow: 1;
  font-family: "Prompt", sans-serif;
  align-self: flex-start;
  margin: 0.2rem auto 0.5rem;
`;

export const StyledH5 = styled.h5`
  font-size: 1rem;
  color: ${(props) => props.theme.primaryWhite};
  display: inline-block;
  padding: 1rem;
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  margin: 0 auto;

  vertical-align: center;
  background: ${(props) => props.theme.secondaryBackground};
  &:hover {
    color: ${(props) => props.theme.secondaryBackground};
    background: ${(props) => props.theme.primaryWhite};
  }
`;
