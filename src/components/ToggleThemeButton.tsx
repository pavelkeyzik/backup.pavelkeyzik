import styled from '@emotion/styled';
import { AvailableTheme, useTheme } from '../hooks/use-theme';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

function ToggleThemButton() {
  const theme = useTheme();
  return (
    <RootButton onClick={theme.toggleTheme}>
      {theme.currentTheme === AvailableTheme.light ? <MoonIcon /> : <SunIcon />}
    </RootButton>
  );
}

const RootButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.color.textForeground};
`;

export { ToggleThemButton };
