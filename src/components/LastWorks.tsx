import styled from '@emotion/styled';
import { ContentWidth } from './ContentWidth';

function LastWorks() {
  return (
    <ContentWidth>
      <h2>Last Works</h2>
      <CardsGrid>
        <Card>
          <a href="https://subaruteambelarus.by" target="_blank">
            subaruteambelarus.by
          </a>
          <TechnologiesList>React, TypeScript, Gatsby.js</TechnologiesList>
        </Card>
        <Card>
          <a href="https://aibolit.com" target="_blank">
            aibolit.com
          </a>
          <TechnologiesList>React, TypeScript, Next.js</TechnologiesList>
        </Card>
        <Card>
          <a href="https://pavelkeyzik.github.io" target="_blank">
            pavelkeyzik.github.io
          </a>
          <TechnologiesList>HTML, CSS, Gulp</TechnologiesList>
        </Card>
        <Card>
          <a href="https://avipe.netlify.app" target="_blank">
            avipe.netlify.app
          </a>
          <TechnologiesList>
            React, TypeScript, Ruby, PostgreSQL
          </TechnologiesList>
        </Card>
        <Card>
          <a
            href="https://pavelkeyzik-desgin-system.netlify.app"
            target="_blank"
          >
            pavelkeyzik-desgin-system.netlify.app
          </a>
          <TechnologiesList>React, TypeScript, Storybook</TechnologiesList>
        </Card>
        <Card>
          <a href="https://github.com/pavelkeyzik" target="_blank">
            More projects...
          </a>
          <TechnologiesList>Front-end, Back-end, Design</TechnologiesList>
        </Card>
      </CardsGrid>
    </ContentWidth>
  );
}

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;

  @media screen and (min-width: 600px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechnologiesList = styled.p`
  color: ${(props) => props.theme.color.technologiesListColor};
`;

export { LastWorks };
