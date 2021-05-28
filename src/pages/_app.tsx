// Packages
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Definitions
import { AppProps } from 'next/app';

// Styles
import GlobalStyle from '@theme/global';
import DefaultTheme from '@theme/default';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
