// Packages
import { createGlobalStyle } from 'styled-components';

// Definitions
import { TDefaultTheme } from '@def/TDefaulTheme';

const GlobalStyle = createGlobalStyle<{ theme: TDefaultTheme }>`
  :root {
    min-width: 320px;
    font-size: ${(props) => props.theme.font.size};
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) => props.theme.font.color};
  }
  * {
    position: relative;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.colors.background};
  }
  input, select {
    appearance: none;
  }
  select::-ms-expand { display: none; }
`;

export default GlobalStyle;
