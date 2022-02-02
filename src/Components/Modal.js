import React from "react";
import { ModalBg, ModalContent } from "./styling/Modal";
import { CardSearchContainer } from "./styling/Containers";
import { StyledH1 } from "./styling/Headings";
import { FlexSpan } from "./styling/Spans";
import { StyledButton } from "./styling/Buttons";
import List from "./List";
import CountryCard from "./CountryCard";
const Modal = ({
  currentCountry,
  accentColors,
  getRandomCountries,
  testOnlyIncorrectAnswers,
  setShowIncorrectAnswers,
  incorrectAnswersArr,
  setIncorrectAnswersArr,
  setCurrentCountry,
  coloursLoading,
}) => {
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  return (
    <ModalBg>
      <ModalContent>
        <StyledH1>Incorrect Answers</StyledH1>
        <CardSearchContainer>
          {currentCountry.name !== null && (
            <CountryCard
              currentCountry={currentCountry}
              accentColors={accentColors}
              coloursLoading={coloursLoading}
            />
          )}
        </CardSearchContainer>
        <FlexSpan narrowFlexDirection={"row"} maxWidth={"10in"}>
          <StyledButton
            margin='0.5rem auto 0.1rem'
            onClick={() => {
              getRandomCountries(!testOnlyIncorrectAnswers);
              setShowIncorrectAnswers(false);
            }}
          >
            Close incorrect answers
          </StyledButton>
          <StyledButton
            margin='0.5rem auto 0.1rem'
            onClick={() => {
              setIncorrectAnswersArr(shuffleArray([...incorrectAnswersArr]));
            }}
          >
            Shuffle countries
          </StyledButton>
          <StyledButton
            margin='0.5rem auto 0.1rem'
            onClick={() => {
              const sortedArr = [...incorrectAnswersArr].sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
              });
              setIncorrectAnswersArr(sortedArr);
            }}
          >
            Sort A-Z
          </StyledButton>
        </FlexSpan>
        <List
          names={incorrectAnswersArr.map((country) => country.name)}
          setCurrentCountry={setCurrentCountry}
          countryData={incorrectAnswersArr}
          currentCountry={currentCountry}
        />
      </ModalContent>
    </ModalBg>
  );
};

export default Modal;
