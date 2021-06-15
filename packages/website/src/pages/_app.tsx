import type { AppProps } from 'next/app';
import {
  css,
  Global,
  ThemeProvider as BaseThemeProvider,
} from '@emotion/react';
import {
  AvailableTheme,
  ThemeProvider,
  useThemeState,
} from '../hooks/use-theme';
import { theme } from '../theme';

type MyAppProps = {
  children?: React.ReactNode;
};

function MyApp(props: MyAppProps) {
  const themeState = useThemeState();
  const currentTheme =
    themeState === AvailableTheme.light ? theme.lightTheme : theme.darkTheme;

  return (
    <BaseThemeProvider theme={currentTheme}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

          * {
            box-sizing: border-box;
          }

          body {
            background-color: ${currentTheme.color.background};
            color: ${currentTheme.color.textForeground};
            margin: 0;
            padding: 0;
            font-family: Poppins, sans-serif;
            font-size: 18px;
            transition: background-color 0.2s;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${currentTheme.color.headingsForeground};
          }

          a {
            color: ${currentTheme.color.link};
            text-decoration: none;

            :hover {
              color: ${currentTheme.color.linkHover};
              text-decoration: underline;
            }
          }
        `}
      />
      {props.children}
    </BaseThemeProvider>
  );
}

function MyAppWrapper({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MyApp>
        <Component {...pageProps} />
      </MyApp>
    </ThemeProvider>
  );
}

export default MyAppWrapper;
