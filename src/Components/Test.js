import { QuizImg } from "./styling/Imgs";
import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import QuizSearch from "./QuizSearch";
import { StyledButton, QuizSearchResultButton } from "./styling/Buttons";
import { StyledSpan, FlexSpan } from "./styling/Spans";
import { FlexDiv } from "./styling/Divs";
import { StyledH3, StyledH6 } from "./styling/Headings";
import { StyledImgContainer } from "./styling/Containers";
import { StyledP } from "./styling/Ps";

import Modal from "./Modal";

const Test = ({
  countryData,
  currentCountry,
  setCurrentCountry,
  accentColors,
  currentCountry: { name, capital, flag, otherNames },
}) => {
  const testModes = [
    "Guess the Capital from the Country",
    "Guess the Country from the Flag",
    "Guess the Country from the Capital",
  ];
  const [correctAnswers, setCorrectAnswers] = useLocalStorage(
    "correctAnswers",
    0
  );

  const [randomCountries, setRandomCountries] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState(true);
  const [currentTestMode, setCurrentTestMode] = useState(
    "Guess the Country from the Flag"
  );
  const [answerHistory, setAnswerHistory] = useState([]);
  const [quizSearchText, setQuizSearchText] = useState("");
  const [quizSearchOptions, setQuizSearchOptions] = useState([]);
  const [incorrectAnswersArr, setIncorrectAnswersArr] = useLocalStorage(
    "incorrectAnswers",
    []
  );

  const [showIncorrectAnswers, setShowIncorrectAnswers] = useState(false);
  const [testOnlyIncorrectAnswers, setTestOnlyIncorrectAnswers] = useState(
    false
  );

  const correctAnswer =
    answerHistory.length > 0
      ? answerHistory[answerHistory.length - 1].name ===
        answerHistory[answerHistory.length - 1].correctAnswer.name
      : null;
  const getRandomCountries = (bool = true) => {
    const tempArr = [];
    let tempNum = 4;
    if (bool) {
      if (countryData.length < 4) {
        tempNum = countryData.length;
      }
      while (tempArr.length < tempNum) {
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
    } else {
      if (incorrectAnswersArr.length < 4) {
        tempNum = incorrectAnswersArr.length;
      }
      while (tempArr.length < tempNum) {
        const randomCountry =
          incorrectAnswersArr[
            Math.floor(Math.random() * incorrectAnswersArr.length)
          ];
        if (
          tempArr.indexOf(randomCountry) === -1 &&
          randomCountry.capital &&
          randomCountry.flag
        ) {
          tempArr.push(randomCountry);
        }
      }
    }

    setCurrentCountry(tempArr[Math.floor(Math.random() * tempNum)]);
    setRandomCountries(tempArr);
  };
  const submitAnswer = (answer) => {
    setAnswerHistory([
      ...answerHistory,
      { ...answer, correctAnswer: currentCountry },
    ]);

    if (answer === currentCountry) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      if (
        !incorrectAnswersArr.some(
          (country) => country.name === currentCountry.name
        )
      ) {
        setIncorrectAnswersArr([...incorrectAnswersArr, currentCountry]);
      }
    }
    setQuizSearchText("");
    setQuizSearchOptions([]);
    getRandomCountries(!testOnlyIncorrectAnswers);
  };
  return (
    <>
      {showIncorrectAnswers && incorrectAnswersArr.length > 0 && (
        <Modal
          currentCountry={currentCountry}
          accentColors={accentColors}
          getRandomCountries={getRandomCountries}
          testOnlyIncorrectAnswers={testOnlyIncorrectAnswers}
          setShowIncorrectAnswers={setShowIncorrectAnswers}
          incorrectAnswersArr={incorrectAnswersArr}
          setCurrentCountry={setCurrentCountry}
          setIncorrectAnswersArr={setIncorrectAnswersArr}
        />
      )}

      <FlexSpan narrowFlexDirection={"row"} maxWidth={"10in"}>
        {(answerHistory.length > 0 || incorrectAnswersArr.length > 0) && (
          <StyledH3>Correct answers: {correctAnswers || 0}</StyledH3>
        )}
        {countryData.length > 0 && (
          <StyledSpan marginProps="1rem">
            <StyledButton
              narrowMinHeight={"60px"}
              narrowMinWidth={"50px"}
              onClick={() => setCurrentTestMode(testModes[0])}
            >
              Identify the Capital
            </StyledButton>
            <StyledButton
              narrowMinHeight={"60px"}
              narrowMinWidth={"50px"}
              onClick={() => setCurrentTestMode(testModes[1])}
            >
              Identify the Flag
            </StyledButton>
            <StyledButton
              narrowMinHeight={"60px"}
              narrowMinWidth={"50px"}
              onClick={() => setCurrentTestMode(testModes[2])}
            >
              Identify the Country
            </StyledButton>
          </StyledSpan>
        )}
        {(answerHistory.length > 0 || incorrectAnswersArr.length > 0) && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledH3>Incorrect answers: {incorrectAnswersArr.length}</StyledH3>
            {incorrectAnswersArr.length > 0 && !showIncorrectAnswers && (
              <StyledButton
                onClick={() => {
                  setCurrentCountry(incorrectAnswersArr[0]);
                  setShowIncorrectAnswers(true);
                }}
              >
                {showIncorrectAnswers
                  ? "Hide incorrect answers"
                  : "Show incorrect answers"}
              </StyledButton>
            )}
          </div>
        )}
      </FlexSpan>
      {countryData.length === 0 && (
        <StyledH6>Loading country information...</StyledH6>
      )}
      {countryData.length > 0 && (
        <>
          <StyledP flexGrow={0}>Test mode selected: {currentTestMode}</StyledP>
          <StyledSpan
            marginProps="1rem auto"
            narrowFlexDirection={"column"}
            width={"70%"}
            narrowMinWidth={"95vw"}
            narrowMarginProps={"0.3rem auto"}
            maxWidth={"10in"}
          >
            <FlexDiv
              longFlexDirection={"column"}
              narrowFlexDirection={"row"}
              wideFlexDirection={"column"}
            >
              {(answerHistory.length > 0 ||
                correctAnswers > 0 ||
                incorrectAnswersArr.length > 0) && (
                <StyledButton
                  minHeight={"40px"}
                  narrowMinHeight={"55px"}
                  narrowMaxWidth={"120px"}
                  onClick={() => {
                    const confirmation = window.confirm("Are you sure?");
                    if (confirmation) {
                      getRandomCountries();
                      setAnswerHistory([]);
                      setIncorrectAnswersArr([]);
                      setTestOnlyIncorrectAnswers(false);
                      setCorrectAnswers(0);
                    }
                  }}
                >
                  Reset
                </StyledButton>
              )}
              <StyledButton
                minHeight={"40px"}
                narrowMinHeight={"55px"}
                narrowMaxWidth={"120px"}
                onClick={() => {
                  getRandomCountries();
                }}
              >
                Test countries!
              </StyledButton>
              <StyledButton
                minHeight={"40px"}
                narrowMinHeight={"55px"}
                narrowMaxWidth={"120px"}
                onClick={(prevProps) => setMultipleChoice(!multipleChoice)}
              >
                {`Switch to ${
                  multipleChoice ? "typing" : "multiple choice"
                } mode`}
              </StyledButton>
              {incorrectAnswersArr.length > 0 && (
                <StyledButton
                  minHeight={"40px"}
                  narrowMinHeight={"55px"}
                  narrowMaxWidth={"120px"}
                  onClick={() => {
                    if (testOnlyIncorrectAnswers === false) {
                      setTestOnlyIncorrectAnswers(true);
                      getRandomCountries(false);
                    } else {
                      setTestOnlyIncorrectAnswers(false);
                      getRandomCountries(true);
                    }
                  }}
                >
                  {testOnlyIncorrectAnswers
                    ? "Test all countries"
                    : "Practise incorrect answers"}
                </StyledButton>
              )}
            </FlexDiv>
            {currentTestMode === testModes[0] && name !== null && (
              <StyledSpan>
                <StyledH3>{name}</StyledH3>
              </StyledSpan>
            )}
            {currentTestMode === testModes[1] && flag !== null && (
              <StyledImgContainer>
                <QuizImg src={flag} alt={`Country flag`} />
              </StyledImgContainer>
            )}

            {currentTestMode === testModes[2] && capital !== null && (
              <StyledSpan>
                <StyledH3>{capital}</StyledH3>
              </StyledSpan>
            )}
            {correctAnswer !== null && answerHistory.length > 0 ? (
              <StyledH3 h3Width={"100%"}>{`You selected ${
                currentTestMode === testModes[0]
                  ? answerHistory[answerHistory.length - 1].capital
                  : answerHistory[answerHistory.length - 1].name
              }, which was ${correctAnswer ? "correct" : "incorrect"}.${
                correctAnswer
                  ? ""
                  : ` The correct answer was ${
                      currentTestMode === testModes[0]
                        ? answerHistory[answerHistory.length - 1].correctAnswer
                            .capital
                        : answerHistory[answerHistory.length - 1].correctAnswer
                            .name
                    }.`
              }`}</StyledH3>
            ) : (
              <StyledH3 h3Width={"100%"} />
            )}
          </StyledSpan>
          {randomCountries.length > 0 &&
            (multipleChoice === true ? (
              <StyledSpan minWidth={"60vw"} narrowMarginProps={"0.2rem"}>
                {randomCountries.map((country) => (
                  <StyledButton
                    minHeight={"100px"}
                    narrowMaxHeight={"100px"}
                    narrowMinHeight={"70px"}
                    narrowMinWidth={"40%"}
                    maxWidth={"220px"}
                    key={country.name}
                    onClick={() => submitAnswer(country)}
                  >
                    {currentTestMode === testModes[0]
                      ? country.capital
                      : country.name}
                  </StyledButton>
                ))}
              </StyledSpan>
            ) : (
              <>
                <QuizSearch
                  quizSearchText={quizSearchText}
                  currentTestMode={currentTestMode}
                  setQuizSearchText={setQuizSearchText}
                  countryData={countryData}
                  quizSearchOptions={quizSearchOptions}
                  setQuizSearchOptions={setQuizSearchOptions}
                />
                {quizSearchOptions.length > 0 && (
                  <StyledSpan
                    minWidth={"60vw"}
                    maxWidth={"95vw"}
                    narrowMarginProps={"1rem"}
                  >
                    {quizSearchOptions.map((country) =>
                      currentTestMode === testModes[0] ? (
                        <StyledButton
                          key={country.capital}
                          onClick={() => submitAnswer(country)}
                        >
                          {country.capital}
                        </StyledButton>
                      ) : (
                        <StyledButton
                          key={country.name}
                          minHeight={"150px"}
                          minWidth={"27%"}
                          onClick={() => submitAnswer(country)}
                          maxWidth={"100%"}
                          narrowMaxWidth={"100%"}
                          maxHeightProp={"280px"}
                          narrowMinWidth={"150px"}
                          narrowWidth={"45%"}
                          narrowMaxHeight={"200px"}
                          narrowMinHeight={"150px"}
                          alignItems={"flex-start"}
                        >
                          <QuizSearchResultButton>
                            <h1>{country.name}</h1>
                            <p>{`aka ${country.otherNames.join(", ")}`}</p>
                          </QuizSearchResultButton>
                        </StyledButton>
                      )
                    )}
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
