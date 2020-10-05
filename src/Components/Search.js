import React from "react";

import styled from "styled-components";
import { StyledButton } from "./List";

const StyledSearch = styled.div`
  display: flex;

  text-align: center;
  justify-self: center;
  margin: auto;
  min-width: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: rgba(80, 80, 80, 0.8);
  margin: 0 -1rem -1rem -1rem;
  * {
    margin: 1rem;
  }
  * {
    flex-shrink: 1;
  }
`;

export default function Search({ setSearchText, searchText }) {
  return (
    <StyledSearch>
      <p>Search by country: </p>
      <input
        type="text"
        name="search"
        id="search-box"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          setSearchText("");
        }}
      >
        Clear
      </StyledButton>
      <a href="#top">Back to top</a>
    </StyledSearch>
  );
}
