import React from "react";

import { StyledButton } from "./styling/Buttons";
import { StyledSearch } from "./styling/Divs";

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
      <span>
        <StyledButton
          narrowMinHeight={"40px"}
          narrowMaxHeight={"40px"}
          margin={"0 5px"}
          onClick={(e) => {
            e.preventDefault();
            setSearchText("");
          }}
        >
          Clear
        </StyledButton>
        <StyledButton
          narrowMinHeight={"40px"}
          narrowMaxHeight={"40px"}
          onClick={(e) =>
            setTimeout(() => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }, 0)
          }
        >
          Back to top
        </StyledButton>
      </span>
    </StyledSearch>
  );
}
