import React from "react";
import styled from "styled-components";
import { StyledA } from "./Title";
import { StyledH5 } from "./styling/Headings";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.secondaryBackground};
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledA href='/' alt='Country Tester Home'>
        <StyledH5>Home</StyledH5>
      </StyledA>
      <StyledA href='/test' alt='Country Tester'>
        <StyledH5>Test your knowledge</StyledH5>
      </StyledA>
    </StyledNav>
  );
};

export default Nav;
