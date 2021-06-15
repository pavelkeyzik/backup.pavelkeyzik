import styled from 'styled-components';
import { config } from '../config';

function Navigation() {
  return (
    <Root>
      <h1>
        pavelkeyzik<PrimaryText>.</PrimaryText>
      </h1>
      <NavigationLinks>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </NavigationLinks>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  ${config.contentPadding};
`;

const PrimaryText = styled.span`
  color: ${config.primary};
`;

const NavigationLinks = styled.nav`
  display: none;

  & > *:not(:last-child) {
    margin-right: 24px;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 50px;
    color: white;
    text-decoration: none;

    ::after {
      position: absolute;
      display: flex;
      content: '';
      top: 50px;
      width: 0;
      height: 4px;
      background: ${config.primary};
      transition: width 0.2s;
      border-radius: 4px;
    }
  }

  a:hover::after {
    width: 100%;
  }

  @media (min-width: 800px) {
    display: flex;
  }
`;

export { Navigation };
