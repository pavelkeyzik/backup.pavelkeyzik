import styled from '@emotion/styled';
import { ContentWidth } from './ContentWidth';
import { GitHubIcon } from './icons/GitHubIcon';
import { TwitterIcon } from './icons/TwitterIcon';

type FooterProps = {
  style?: React.CSSProperties;
};

function Footer(props: FooterProps) {
  return (
    <Root style={props.style}>
      <ContentWidth>
        <FooterContent>
          <Nav>
            <SocialLink href="https://twitter.com/pavelkeyzik" target="_blank">
              <TwitterIcon />
              Twitter
            </SocialLink>
            <SocialLink href="https://github.com/pavelkeyzik" target="_blank">
              <GitHubIcon />
              GitHub
            </SocialLink>
          </Nav>
        </FooterContent>
      </ContentWidth>
    </Root>
  );
}

const Root = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: ${(props) => props.theme.color.footerTextForeground};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Nav = styled.nav`
  & > * {
    margin-left: 24px;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;

  & > * {
    margin-right: 8px;
  }
`;

export { Footer };
