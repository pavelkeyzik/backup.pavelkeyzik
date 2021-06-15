import styled from 'styled-components';
import { config } from '../config';

function Button(props: React.ComponentPropsWithoutRef<'button'>) {
  return <Root {...props} />;
}

const Root = styled.button`
  background: ${config.primary};
  color: white;
  padding: 16px 32px;
  border-radius: 100px;
  transition: all 0.3s;
  cursor: pointer;

  :hover,
  :focus {
    background: none;
    color: ${config.primary};
    box-shadow: 0 0 0 2px ${config.primary};
  }
`;

export { Button };
