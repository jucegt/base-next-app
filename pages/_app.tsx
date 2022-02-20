// Packages
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// Styles
import DefaultTheme from '@theme/default';
import GlobalStyle from '@theme/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
