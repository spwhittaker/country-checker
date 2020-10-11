import styled from "styled-components";
export const StyledButton = styled.a`
  background-color: #4caf50;
  border: 2px white solid;
  color: white;
  margin: ${(props) => props.margin || "auto"};
  padding: 0.4rem;
  min-width: ${(props) => props.minWidth || "100px"};
  max-width: ${(props) => props.maxWidth || "150px"};
  max-height: ${(props) => props.maxHeightProp || "80px"};
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  display: inline-flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  font-size: 1rem;
  box-sizing: border-box;
  /*  flex-grow: 1;
  flex-basis: 1; */
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: white;
  @media screen and (min-width: 601px) {
    min-height: ${(props) => props.minHeight || "30px"};
  }
  @media screen and (max-width: 600px) {
    min-width: ${(props) => props.narrowMinWidth || "20%"};

    font-size: 0.7rem;
    padding: 0.2rem;
    max-height: ${(props) => props.narrowMaxHeight || "100px"};
    min-height: ${(props) =>
      props.narrowMinHeight ? props.narrowMinHeight : "70px"};
    max-width: ${(props) => props.narrowMaxWidth || "80px"};
  }

  &:hover {
    box-sizing: border-box;
    background-color: white;
    border: 2px #4caf50 solid;
    color: #4caf50;
  }
`;

export const QuizSearchResultButton = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  padding: 0.2rem;
  justify-content: flex-start;
  flex-grow: 1;
  p {
    display: block;
    font-size: 12px;
    flex-grow: 1;
    @media screen and (max-width: 600px) {
      margin: 2px auto;
      font-size: 10px;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      margin: 2px auto;
      font-size: 11px;
    }
  }
`;
