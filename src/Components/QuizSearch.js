import React from "react";
import { StyledSearch } from "./styling/Divs";
import { StyledButton } from "./styling/Buttons";
export default function QuizSearch({
  quizSearchText,
  setQuizSearchText,
  countryData,
  quizSearchOptions,
  setQuizSearchOptions,
}) {
  const filterOptions = (searchText) =>
    countryData.filter((country) => {
      const allNames = [...country.otherNames, country.name];

      return allNames.find((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
    });

  return (
    <StyledSearch marginProps={"0 auto"}>
      <p>Search</p>
      <input
        type="text"
        name="search"
        id="search-box"
        onChange={(e) => {
          setQuizSearchText(e.target.value);
          setQuizSearchOptions(filterOptions(e.target.value));
        }}
        value={quizSearchText}
      />
      <span>
        <StyledButton
          narrowMaxHeight={"50px"}
          narrowMinHeight={"20px"}
          onClick={(e) => {
            e.preventDefault();
            setQuizSearchText("");
            setQuizSearchOptions([]);
          }}
        >
          Clear
        </StyledButton>
      </span>
    </StyledSearch>
  );
}
