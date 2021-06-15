import styled from 'styled-components';
import { Button } from './Button';

function Header() {
  return (
    <Root>
      <HeaderTitle>👋 Front-end Engineer</HeaderTitle>
      <HeaderDescription>
        I use daily React, TypeScript, Next.js, and Figma. Really enjoy to learn
        new things and passionate about design systems...
      </HeaderDescription>
      <Button>Connect With Me</Button>
    </Root>
  );
}

const Root = styled.header`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
`;

const HeaderTitle = styled.span`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HeaderDescription = styled.p`
  max-width: 850px;
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 1.4em;
`;

export { Header };
