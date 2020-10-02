import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  color: blue;
  background-color: rgba(23, 34, 45, 0.9);
  background-image: url("./world.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  opacity: 0.7;
  font-family: "Domine", sans-serif;
  font-size: 4rem;
  margin: 0 0 1rem 0;
  height: 5rem;

  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
`;

export default Title;
