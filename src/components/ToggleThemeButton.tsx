import styled from '@emotion/styled';
import { AvailableTheme, useTheme } from '../hooks/use-theme';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

type ToggleThemeButtonProps = {
  style?: React.CSSProperties;
};

function ToggleThemeButton(props: ToggleThemeButtonProps) {
  const theme = useTheme();
  return (
    <RootButton style={props.style} onClick={theme.toggleTheme}>
      {theme.currentTheme === AvailableTheme.light ? <MoonIcon /> : <SunIcon />}
    </RootButton>
  );
}

const RootButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.color.textForeground};
`;

export { ToggleThemeButton };
