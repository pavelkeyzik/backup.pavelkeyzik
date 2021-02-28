import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';

enum AvailableTheme {
  light,
  dark,
}

const defaultTheme = AvailableTheme.light;

const ThemeStateContext = createContext<AvailableTheme>(defaultTheme);
const ThemeDispatchContext = createContext<DispatchAction>(() => {});

type ThemeProviderProps = {
  children?: React.ReactNode;
};

type DispatchAction = Dispatch<SetStateAction<AvailableTheme>>;

function ThemeProvider(props: ThemeProviderProps) {
  const isPreferedLightTheme = useMediaQuery({
    query: '(prefers-color-scheme: light)',
  });
  const [theme, setTheme] = useState<AvailableTheme>(defaultTheme);

  useEffect(() => {
    if (isPreferedLightTheme) {
      setTheme(AvailableTheme.light);
    } else {
      setTheme(AvailableTheme.dark);
    }
  }, [isPreferedLightTheme]);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  return useContext(ThemeStateContext);
}

function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

function useTheme() {
  const currentTheme = useThemeState();
  const dispatch = useThemeDispatch();

  function toggleTheme() {
    dispatch(
      currentTheme === AvailableTheme.light
        ? AvailableTheme.dark
        : AvailableTheme.light
    );
  }

  return {
    currentTheme,
    toggleTheme,
  };
}

export {
  ThemeProvider,
  AvailableTheme,
  useThemeState,
  useThemeDispatch,
  useTheme,
};
