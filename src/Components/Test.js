import styled from "styled-components";
import React, { useState } from "react";
import { StyledButton, StyledH6 } from "./List";
import { StyledImg } from "./CountryCard";
import QuizSearch from "./QuizSearch";

const StyledSpan = styled.span`
  background: rgba(256, 256, 256, 0.3);
  display: flex;
  margin: ${(props) => props.marginProps || "auto"};
  justify-content: space-around;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  min-width: ${(props) => props.minWidth || null};
  max-width: 100%;
  * {
    flex: 1;
    margin: 0.5rem;
    display: block;
  }
`;

const StyledImgContainer = styled.div`
  background: rgba(256, 256, 256, 0.5);
  padding: 0.5rem;
  width: 15rem;
  height: 15rem;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  img {
    display: inline;

    max-width: 100%;
    max-height: 100%;
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
  const [quizSearchText, setQuizSearchText] = useState("");
  const [quizSearchOptions, setQuizSearchOptions] = useState([]);

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
    setQuizSearchText("");
    setQuizSearchOptions([]);
    getRandomCountries();
  };
  console.log(quizSearchOptions);
  return (
    <>
      <FlexSpan>
        {answerHistory.length > 0 && <h3>Correct answers: {correctAnswers}</h3>}
        {countryData.length > 0 && (
          <StyledSpan>
            {/* <StyledButton onClick={() => setCurrentTestMode(testModes[0])}>
              Identify the Capital
            </StyledButton> */}
            <StyledButton onClick={() => setCurrentTestMode(testModes[1])}>
              Identify the Flag
            </StyledButton>
            {/* <StyledButton onClick={() => setCurrentTestMode(testModes[2])}>
              Identify the Country
            </StyledButton> */}
          </StyledSpan>
        )}
        {answerHistory.length > 0 && (
          <h3>Incorrect answers: {incorrectAnswers}</h3>
        )}
      </FlexSpan>
      {countryData.length === 0 && (
        <StyledH6>Loading country information...</StyledH6>
      )}
      {countryData.length > 0 && (
        <>
          <StyledSpan marginProps={"1rem"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <StyledButton
                onClick={() => {
                  getRandomCountries();
                  setAnswerHistory([]);
                }}
              >
                {answerHistory.length === 0 ? "Test countries!" : "Reset"}
              </StyledButton>
              <StyledButton
                onClick={(prevProps) => setMultipleChoice(!multipleChoice)}
              >
                {`Switch to ${
                  multipleChoice ? "typing" : "multiple choice"
                } mode`}
              </StyledButton>
            </div>
            {currentTestMode === "Flag" && (
              <StyledImgContainer>
                <StyledImg src={flag} alt={`Country flag`} />
              </StyledImgContainer>
            )}
            {correctAnswer !== null && answerHistory.length > 0 ? (
              <h3>{`You selected ${
                answerHistory[answerHistory.length - 1].name
              }, which was ${correctAnswer ? "correct" : "incorrect"}.${
                correctAnswer
                  ? ""
                  : ` The correct answer was ${
                      answerHistory[answerHistory.length - 1].correctAnswer.name
                    }.`
              }`}</h3>
            ) : (
              <div></div>
            )}
          </StyledSpan>
          {randomCountries.length > 0 &&
            (multipleChoice === true ? (
              <StyledSpan minWidth={"60vw"}>
                {randomCountries.map((country) => (
                  <StyledButton
                    minHeight={"100px"}
                    onClick={() => submitAnswer(country)}
                  >
                    {country.name}
                  </StyledButton>
                ))}
              </StyledSpan>
            ) : (
              <>
                <QuizSearch
                  quizSearchText={quizSearchText}
                  setQuizSearchText={setQuizSearchText}
                  countryData={countryData}
                  quizSearchOptions={quizSearchOptions}
                  setQuizSearchOptions={setQuizSearchOptions}
                />
                {quizSearchOptions.length > 0 && (
                  <StyledSpan minWidth={"60vw"} maxWidth={"90vw"}>
                    {quizSearchOptions.map((country) => (
                      <StyledButton
                        key={country.name}
                        minHeight={"100px"}
                        minWidth
                        onClick={() => submitAnswer(country)}
                        maxWidth={"auto"}
                      >
                        <div
                          style={{
                            display: "flex",
                            height: "100%",
                            flexDirection: "column",
                            fontSize: "15px",
                            padding: "1rem",
                            justifyContent: "flex-start",
                          }}
                        >
                          <h1 style={{ fontSize: "12px", flexShrink: 1 }}>
                            {country.name}
                          </h1>
                          <p
                            style={{ fontSize: "10px", flexGrow: 1 }}
                          >{`aka ${country.otherNames.join(", ")}`}</p>
                        </div>
                      </StyledButton>
                    ))}
                  </StyledSpan>
                )}
              </>
            ))}
        </>
      )}
      <div style={{ flexGrow: 10 }}></div>
    </>
  );
};

export default Test;
