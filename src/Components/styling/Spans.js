import styled from "styled-components";
export const StyledSpan = styled.span`
  background: rgba(256, 256, 256, 0.3);
  display: flex;
  margin: ${(props) => props.marginProps || "auto"};
  justify-content: space-around;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
width: ${(props) => props.width || null};
  min-width: ${(props) => props.minWidth || null};
  max-width: ${(props) => props.maxWidth || "100%"}};
  * {
    flex: 1;
  }
  a {
    margin: 0.2rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: ${(props) => props.narrowFlexDirection || "row"};
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.narrowMarginProps || "0.3rem auto"};
  }
`;
export const FlexSpan = styled.span`
  display: flex;
  margin: ${(props) => props.margin || "auto"};
  max-width: ${(props) => props.maxWidth || "100%"};
  justify-content: space-evenly;
  flex-direction: ${(props) => props.wideFlexDirection || "row"};
  @media screen and (max-width: 600px) {
    flex-direction: ${(props) => props.narrowFlexDirection || "column"};
    justify-content: center;
    align-items: center;
  }
`;
