import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-soothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: red;
  }

  /* Scrool */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }

  ::-webkit-scrollbar-thumb {
    background: #949997;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #949997;
    width: 50px;
  }

  /* Remove Icon Password by Edge */
  ::-ms-reveal {
    display: none;
  }

  ${({ theme }) => css`
    html {
      font-size: 24px;
      overflow: hidden;
    }

    body {
      font-family: ${theme.font.family};
    }
  `}

`;

export default GlobalStyle;
