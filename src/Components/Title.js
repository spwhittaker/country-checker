import styled from "styled-components";
export const StyledA = styled.a`
  text-decoration: none;
  * {
    text-decoration: none;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    padding: 0;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.2rem;
    padding: 0;
  }
  color: blue;
  background-color: ${(props) => props.theme.tertiaryBackground};
  background-image: url("./world.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  font-family: "Trirong";
  font-size: 4rem;
  margin: 0;
  height: 5rem;
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
`;
