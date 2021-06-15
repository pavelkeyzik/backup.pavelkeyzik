import styled from 'styled-components';
import Image from 'next/image';
import { config } from '../config';
import { GitHubIcon } from './icons/GitHub';
import { TwitterIcon } from './icons/Twitter';
import { LinkedInIcon } from './icons/LinkedIn';

function AboutMe() {
  return (
    <SectionContainer>
      <Grid>
        <ImageContainer>
          <Image
            src="/me.jpeg"
            layout="responsive"
            width="auto"
            height="auto"
          />
        </ImageContainer>
        <div>
          <SectionTitle>About Me</SectionTitle>
          <SectionDescription>
            Hi! I'm Pavel and I really love doing Front-end work with React and
            TypeScript. I'm passionate about design systems and user experience.
          </SectionDescription>
          <SectionDescription>
            Sometimes I try new things like Back-end, DevOps, making my own
            designs, or even video making. You can check some of my works on{' '}
            <a href="https://dribbble.com/pavelkeyzik" target="_blank">
              Dribbble
            </a>
            ,{' '}
            <a href="https://themeforest.net/user/pavelkeyzik" target="_blank">
              Envato Market
            </a>
            ,{' '}
            <a href="https://unsplash.com/@pavelkeyzik" target="_blank">
              Unsplash
            </a>
            , or{' '}
            <a
              href="https://www.youtube.com/channel/UCvuShrOlcCtLoJ7gEUwB0FA"
              target="_blank"
            >
              YouTube
            </a>
            .
          </SectionDescription>
          <SocialLinks>
            <a href="https://github.com/pavelkeyzik" target="_blank">
              <GitHubIcon />
            </a>
            <a href="https://twitter.com/pavelkeyzik" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/pavelkeyzik" target="_blank">
              <LinkedInIcon />
            </a>
          </SocialLinks>
        </div>
      </Grid>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: ${config.sizes[24]};

  @media (min-width: 600px) {
    padding: ${config.sizes[64]};
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: flex-start;
  grid-gap: 60px;
  grid-template-columns: 1fr;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: 2fr 4fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SectionDescription = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5em;
  margin-bottom: 16px;

  a {
    font-weight: bold;
    color: white;
    transition: 0.3s;

    :hover {
      color: ${config.primary};
    }
  }
`;

const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  > :not(:last-child) {
    margin-right: 16px;
  }

  a {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    transition: 0.3s;
    color: ${config.primary};

    :hover {
      background: ${config.primary};
      color: white;
    }
  }
`;

export { AboutMe };
