import React from 'react';
import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import { Header } from '../components/Header';
import { ToggleThemButton } from '../components/ToggleThemeButton';
import { Footer } from './Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
  const route = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Head>
        <title>Pavel Keyzik's Personal Site</title>
      </Head>
      <Header>
        <Header.Item>
          <Link href="/">Pavel Keyzik</Link>
        </Header.Item>
        <Header.Item>
          <Nav>
            <ActiveLink isActive={route.pathname === '/'} href="/">
              Home
            </ActiveLink>
            <ActiveLink isActive={route.pathname === '/about'} href="/about">
              About
            </ActiveLink>
            <ActiveLink
              isActive={route.pathname === '/contact'}
              href="/contact"
            >
              Contact
            </ActiveLink>
          </Nav>
          <ToggleThemButton />
        </Header.Item>
      </Header>
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <Footer style={{ marginTop: 80 }} />
    </div>
  );
}

function ActiveLink(
  props: React.PropsWithChildren<LinkProps & { isActive?: boolean }>
) {
  const { isActive, ...rest } = props;

  return (
    <Root isActive={isActive}>
      <Link {...rest} />
    </Root>
  );
}

const Root = styled.span<{ isActive?: boolean }>`
  position: relative;

  ${(props) =>
    props.isActive &&
    css`
      ::after {
        content: '';
        position: absolute;
        display: flex;
        top: 26px;
        left: calc(50% - 8px);
        width: 16px;
        height: 4px;
        border-radius: 4px;
        background: ${props.theme.color.primary};
      }
    `}
`;

const Nav = styled.nav`
  & > * {
    margin-right: 16px;
  }
`;

export { Layout };
