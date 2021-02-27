type Theme = typeof lightTheme;

const colorTokens = {
  white: '#fff',
  black: '#000',
  gray: {
    100: '#e6e6e6',
    200: '#cccccc',
    300: '#b3b3b3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },
};

const lightTheme = {
  color: {
    primary: colorTokens.black,
    background: colorTokens.gray[100],
    textForeground: colorTokens.black,
    headerBackground: colorTokens.white,
    link: colorTokens.gray[800],
    linkHover: colorTokens.black,
  },
};

const darkTheme = {
  color: {
    primary: colorTokens.white,
    background: colorTokens.gray[900],
    textForeground: colorTokens.white,
    headerBackground: colorTokens.black,
    link: colorTokens.gray[200],
    linkHover: colorTokens.white,
  },
};

const theme = {
  lightTheme,
  darkTheme,
};

export type { Theme };
export { theme };
