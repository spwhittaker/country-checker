import { QuizImg } from "./styling/Imgs";
import React, { useState } from "react";
import QuizSearch from "./QuizSearch";
import { StyledButton, QuizSearchResultButton } from "./styling/Buttons";
import { StyledSpan, FlexSpan } from "./styling/Spans";
import { FlexDiv } from "./styling/Divs";
import { StyledH3, StyledH6 } from "./styling/Headings";
import { StyledImgContainer } from "./styling/Containers";
import { StyledP } from "./styling/Ps";

const Test = ({
  countryData,
  currentCountry,
  setCurrentCountry,
  currentCountry: { name, capital, flag, otherNames },
}) => {
  const testModes = [
    "Guess the Capital from the Country",
    "Guess the Country from the Flag",
    "Guess the Country from the Capital",
  ];
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [randomCountries, setRandomCountries] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState(true);
  const [currentTestMode, setCurrentTestMode] = useState(
    "Guess the Country from the Flag"
  );
  const [answerHistory, setAnswerHistory] = useState([]);
  const [quizSearchText, setQuizSearchText] = useState("");
  const [quizSearchOptions, setQuizSearchOptions] = useState([]);
  const correctAnswer =
    answerHistory.length > 0
      ? answerHistory[answerHistory.length - 1].name ===
        answerHistory[answerHistory.length - 1].correctAnswer.name
      : null;
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
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setQuizSearchText("");
    setQuizSearchOptions([]);
    getRandomCountries();
  };
  console.log(currentCountry);
  return (
    <>
      <FlexSpan narrowFlexDirection={"row"} maxWidth={"10in"}>
        {answerHistory.length > 0 && (
          <StyledH3>Correct answers: {correctAnswers}</StyledH3>
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
        {answerHistory.length > 0 && (
          <StyledH3>Incorrect answers: {incorrectAnswers}</StyledH3>
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
              <StyledButton
                minHeight={"40px"}
                narrowMinHeight={"55px"}
                narrowMaxWidth={"120px"}
                onClick={() => {
                  getRandomCountries();
                  setAnswerHistory([]);
                }}
              >
                {answerHistory.length === 0 ? "Test countries!" : "Reset"}
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
