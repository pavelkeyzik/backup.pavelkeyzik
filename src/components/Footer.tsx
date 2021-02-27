import styled from '@emotion/styled';
import { ContentWidth } from './ContentWidth';

type FooterProps = {
  style?: React.CSSProperties;
};

function Footer(props: FooterProps) {
  return (
    <Root style={props.style}>
      <ContentWidth>
        Created by Pavel Keyzik with love at deep night...
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

export { Footer };
