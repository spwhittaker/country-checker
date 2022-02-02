import styled from "styled-components";

export const CountryDiv = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  min-height: 50px;

  margin: 0.2rem;
  padding: 0.2rem;
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    margin: 0.1rem;
    padding: 0.15rem;
  }
  @media screen and (max-width: 450px) {
    padding: 0.1rem;
  }
  background-image: linear-gradient(
    to left top,
    #fff6fb,
    #f8f1f6,
    #f1edf1,
    #eae8eb,
    #e4e3e5,
    #e4e3e6,
    #e3e4e6,
    #e2e4e7,
    #e4eaef,
    #e6f1f6,
    #e7f8fb,
    #e9fffe
  );
`;

export const StyledCountriesList = styled.div`
  display: grid;
  max-width: 12in;
  justify-content: flex-start;

  margin: 1rem auto auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . .";
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . .";
  }
`;

export const StyledCard = styled.div`
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    h1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-aspect-ratio: 7
  /9) {
    flex-direction: row;
    align-items: center;
  }

  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 700px;

  @media screen and (min-aspect-ratio: 7
  /9) {
    max-width: 1400px;
  }
  min-width: 50vw;
  border: 5px solid ${(props) => props.accentColors.Vibrant || "black"};

  background: ${(props) => props.accentColors.LighterMuted || "white"};

  h1 {
    font-size: 2rem;
    line-height: 1;
    margin: 0.5rem;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
    @media screen and (min-aspect-ratio: 7/9) {
      font-size: 1.2rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin: 0.5rem;
    align-self: center;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-aspect-ratio: 7
  /9) {
      font-size: 1rem;
    }
  }
  > div {
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    margin: auto;
    width: 40%;
    max-width: 5in;
    @media screen and (max-width: 700px) {
      width: 90%;
      max-width: 100%;
    }
    @media screen and (min-aspect-ratio: 7
  /9) {
      width: 90%;
      max-width: 80%;
    }
    @media screen and (min-width: 800px) {
      width: 40%;
      max-width: 4in;
    }

    border: ${(props) => props.accentColors.DarkVibrant || "white"} 1px solid;
    background-color: ${(props) => props.accentColors.LightestMuted || "white"};
  }
  h4 {
    font-size: 1.75rem;
    line-height: 1;
    margin: 1rem 1rem 0 1rem;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-aspect-ratio: 7
  /9) {
      font-size: 1rem;
    }
  }

  * {
    color: ${(props) => props.accentColors.DarkerMuted || "black"};
  }

  div {
    margin: 0.15rem;
    min-width: auto;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
    }
    p {
      border: ${(props) => props.accentColors.Vibrant || "black"} 2px solid;
      text-align: center;
      padding: 0.5rem 0.4rem;
      font-size: 1rem;
      flex: 1;
      min-width: 25%;
      margin: 0 0;
      font-weight: 900;
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        min-width: 40%;
      }
      @media screen and (min-aspect-ratio: 7
  /9) {
        font-size: 0.7rem;
      }
    }
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  text-align: center;
  justify-self: center;
  margin: auto;
  min-width: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.darkTranslucent};
  margin: ${(props) => props.marginProps || "0 -1rem -1rem -1rem"};
  p {
    color: white;
  }
  * {
    margin: 0.3rem 0.2rem;
  }
  * {
    flex-shrink: 1;
  }
  input {
    max-width: 20vw;
  }
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${(props) => props.wideFlexDirection || "row"};
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    flex-direction: ${(props) => props.narrowFlexDirection || "column"};
    justify-content: center;
    align-items: center;
  }
`;

export const OtherNamesContainer = styled.div`
  margin: 0 auto;
`;
