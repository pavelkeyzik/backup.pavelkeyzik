import styled from '@emotion/styled';

const Button = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  min-height: 48px;
  padding: 10px 14px;
  background: ${(props) => props.theme.color.buttonBackground};
  color: ${(props) => props.theme.color.buttonForeground};

  :disabled {
    background: ${(props) => props.theme.color.buttonBackgroundDisabled};
    color: ${(props) => props.theme.color.buttonForegroundDisabled};
    cursor: not-allowed;
  }
`;

export { Button };
