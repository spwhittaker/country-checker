import { createGlobalStyle } from "styled-components";
import prompt from "../../assets/Prompt/Prompt-Regular.ttf";
import mulish from "../../assets/Mulish/Mulish-VariableFont_wght.ttf";
import trirong from "../../assets/Trirong/Trirong-ExtraBoldItalic.ttf";
export const theme = {
  primaryBlue: "#0794B4",
  secondaryBlue: "rgb(56, 62, 235)",
  primaryWhite: "#fff",
  primaryGreen: "#4caf50",
  primaryGrey: "rgb(50, 50, 50)",
  primarBlack: "#000",
  secondaryBackground: "rgb(80, 80, 80)",
  tertiaryBackground: "rgba(23, 34, 45, 0.9)",
  quaternaryBackground: "rgba(183, 217, 227, 0.75)",
  lightTranslucent: "rgba(256, 256, 256, 0.3)",
  darkTranslucent: "rgba(80, 80, 80, 0.8)",
};

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: prompt;
    src: url(${prompt}) format('truetype');
    font-weight: normal;
    
  }



  @font-face {
    font-family: mulish;
    src: url(${mulish}) format('truetype');
    font-weight: normal;

  }
  @font-face {
    font-family: trirong;
    src: url(${trirong}) format('truetype');
    font-weight: normal;
 
  }
* { font-family: "Mulish",  -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    sans-serif;}
body {
    margin: 0;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


  html {
    margin: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: #cfdabe;
    background: -webkit-linear-gradient(bottom left, #cfdabe, #b9d2bd);
    background: -moz-linear-gradient(bottom left, #cfdabe, #b9d2bd);
    background: linear-gradient(to top right, #cfdabe, #b9d2bd);
  }
  .App {
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  `;
export default GlobalStyle;
