import React from 'react';
import styled from 'styled-components';
import { AboutMe } from '../components/AboutMe';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

function Home() {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navigation />
        <Header />
      </HeaderSection>
      <AboutMe />
    </React.Fragment>
  );
}

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Home;
