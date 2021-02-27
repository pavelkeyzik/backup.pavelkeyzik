import styled from '@emotion/styled';
import { ContentWidth } from './ContentWidth';

type HeaderProps = {
  children?: React.ReactNode;
};

function Header(props: HeaderProps) {
  return (
    <Root>
      <ContentWidth>
        <StyledHeader>{props.children}</StyledHeader>
      </ContentWidth>
    </Root>
  );
}

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

const Root = styled.div`
  background: ${(props) => props.theme.color.headerBackground};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  width: 100%;
`;

Header.Item = HeaderItem;

export { Header };
