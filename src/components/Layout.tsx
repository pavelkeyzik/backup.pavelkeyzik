import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Header } from '../components/Header';
import { ToggleThemButton } from '../components/ToggleThemeButton';
import { Footer } from './Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
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
            <Link href="/">Works</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Nav>
          <ToggleThemButton />
        </Header.Item>
      </Header>
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <Footer style={{ marginTop: 80 }} />
    </div>
  );
}

const Nav = styled.nav`
  & > * {
    margin-right: 16px;
  }
`;

export { Layout };
