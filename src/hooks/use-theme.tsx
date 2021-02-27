import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

enum AvailableTheme {
  light,
  dark,
}

const ThemeStateContext = createContext(AvailableTheme.light);
const ThemeDispatchContext = createContext<DispatchAction>(() => {});

type ThemeProviderProps = {
  children?: React.ReactNode;
};

type DispatchAction = Dispatch<SetStateAction<AvailableTheme>>;

function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState<AvailableTheme>(AvailableTheme.dark);

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
