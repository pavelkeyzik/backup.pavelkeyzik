import { PropsWithChildren } from "react";
import { HeaderNavigation, styled } from "@pavelkeyzik/design-system";

function Layout(props: PropsWithChildren<unknown>) {
  return (
    <Root>
      <HeaderNavigation>
        <h1>store.</h1>
      </HeaderNavigation>
      <Main>{props.children}</Main>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export { Layout };
