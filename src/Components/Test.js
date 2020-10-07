import styled from "styled-components";
import React, { useState } from "react";
import { StyledButton, StyledH6 } from "./List";
import { StyledImg } from "./CountryCard";

const StyledSpan = styled.span`
  background: rgba(256, 256, 256, 0.3);
  display: flex;
  margin: auto;
  justify-content: space-around;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  * {
    flex: 1;
    margin: 0.5rem;
  }
`;
const FlexSpan = styled.span`
  display: flex;
  justify-content: space-around;
`;
const Test = ({
  countryData,
  currentCountry,
  setCurrentCountry,
  currentCountry: { name, capital, flag, otherNames },
}) => {
  const testModes = ["Capital from Country", "Flag", "Country from Capital"];
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [randomCountries, setRandomCountries] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState(true);
  const [currentTestMode, setCurrentTestMode] = useState("Flag");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answerHistory, setAnswerHistory] = useState([]);

  const getRandomCountries = () => {
    const tempArr = [];
    while (tempArr.length < 4) {
      const randomCountry =
        countryData[Math.floor(Math.random() * countryData.length)];
      if (
        tempArr.indexOf(randomCountry) === -1 &&
        randomCountry.capital &&
        randomCountry.flag
      ) {
        tempArr.push(randomCountry);
      }
    }

    setCurrentCountry(tempArr[Math.floor(Math.random() * 4)]);
    setRandomCountries(tempArr);
  };
  const submitAnswer = (answer) => {
    setAnswerHistory([
      ...answerHistory,
      { ...answer, correctAnswer: currentCountry },
    ]);

    if (answer === currentCountry) {
      setCorrectAnswers(correctAnswers + 1);
      setCorrectAnswer(true);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setCorrectAnswer(false);
    }

    getRandomCountries();
  };

  return (
    <>
      <h1>Test your knowledge of countries, capitals and flags.</h1>
      <FlexSpan>
        <h3>Correct answers: {correctAnswers}</h3>
        <h3>Incorrect answers: {incorrectAnswers}</h3>
      </FlexSpan>
      {countryData.length === 0 && (
        <StyledH6>Loading country information...</StyledH6>
      )}
      {countryData.length > 0 && (
        <>
          <StyledSpan>
            <StyledButton onClick={() => setCurrentTestMode(testModes[0])}>
              Identify the Capital
            </StyledButton>
            <StyledButton onClick={() => setCurrentTestMode(testModes[1])}>
              Identify the Flag
            </StyledButton>
            <StyledButton onClick={() => setCurrentTestMode(testModes[2])}>
              Identify the Country
            </StyledButton>
          </StyledSpan>

          <div>
            <StyledButton onClick={getRandomCountries}>
              Test countries!
            </StyledButton>

            {currentTestMode === "Flag" && (
              <StyledImg src={flag} alt={`Country flag`} />
            )}
            <StyledButton
              onClick={(prevProps) => setMultipleChoice(!multipleChoice)}
            >
              {`Switch to ${
                multipleChoice ? "typing" : "multiple choice"
              } mode`}
            </StyledButton>
          </div>
          {randomCountries.length > 0 && multipleChoice === true && (
            <StyledSpan>
              {randomCountries.map((country) => (
                <StyledButton onClick={() => submitAnswer(country)}>
                  {country.name}
                </StyledButton>
              ))}
            </StyledSpan>
          )}
          {correctAnswer !== null && answerHistory.length > 0 && (
            <h3>{`You selected ${
              answerHistory[answerHistory.length - 1].name
            }, which was ${correctAnswer ? "correct" : "incorrect"}.${
              correctAnswer
                ? ""
                : ` The correct answer was ${
                    answerHistory[answerHistory.length - 1].correctAnswer.name
                  }.`
            }`}</h3>
          )}
        </>
      )}
      <div style={{ flexGrow: 10 }}></div>
    </>
  );
};

export default Test;
