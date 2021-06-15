import React from 'react';
import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../components/Header';
import { ToggleThemeButton } from '../components/ToggleThemeButton';
import { Footer } from './Footer';
import { MenuIcon } from './icons/MenuIcon';
import { useModal } from '../hooks/use-modal';
import { CloseIcon } from './icons/CloseIcon';
import { ContentWidth } from './ContentWidth';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const modal = useModal();
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
          {isMobile ? (
            <React.Fragment>
              <ToggleThemeButton style={{ marginRight: 16 }} />
              <MenuButton
                onClick={() => (modal.isOpen ? modal.close() : modal.open())}
              >
                <MenuIcon />
              </MenuButton>
              <Modal isOpen={modal.isOpen}>
                <ContentWidth>
                  <ModalHeader>
                    <MenuButton onClick={modal.close}>
                      <CloseIcon />
                    </MenuButton>
                  </ModalHeader>
                  <Nav style={{ display: 'grid', gridGap: 20 }}>
                    <ActiveLinkMobile
                      isActive={route.pathname === '/'}
                      href="/"
                    >
                      Home
                    </ActiveLinkMobile>
                    <ActiveLinkMobile
                      isActive={route.pathname === '/about'}
                      href="/about"
                    >
                      About
                    </ActiveLinkMobile>
                    <ActiveLinkMobile
                      isActive={route.pathname === '/contact'}
                      href="/contact"
                    >
                      Contact
                    </ActiveLinkMobile>
                  </Nav>
                </ContentWidth>
              </Modal>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Nav>
                <ActiveLinkDesktop isActive={route.pathname === '/'} href="/">
                  Home
                </ActiveLinkDesktop>
                <ActiveLinkDesktop
                  isActive={route.pathname === '/about'}
                  href="/about"
                >
                  About
                </ActiveLinkDesktop>
                <ActiveLinkDesktop
                  isActive={route.pathname === '/contact'}
                  href="/contact"
                >
                  Contact
                </ActiveLinkDesktop>
              </Nav>
              <ToggleThemeButton />
            </React.Fragment>
          )}
        </Header.Item>
      </Header>
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <Footer style={{ marginTop: 80 }} />
    </div>
  );
}

function ActiveLinkDesktop(
  props: React.PropsWithChildren<LinkProps & { isActive?: boolean }>
) {
  const { isActive, ...rest } = props;

  return (
    <ActiveLinkDesktopRoot isActive={isActive}>
      <Link {...rest} />
    </ActiveLinkDesktopRoot>
  );
}

function ActiveLinkMobile(
  props: React.PropsWithChildren<LinkProps & { isActive?: boolean }>
) {
  const { isActive, ...rest } = props;

  return (
    <ActiveLinkMobileRoot isActive={isActive}>
      <Link {...rest} />
    </ActiveLinkMobileRoot>
  );
}

const ActiveLinkDesktopRoot = styled.span<{ isActive?: boolean }>`
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

const ActiveLinkMobileRoot = styled.span<{ isActive?: boolean }>`
  ${(props) =>
    props.isActive &&
    css`
      a {
        text-decoration: underline;
      }
    `}
`;

const Nav = styled.nav`
  & > * {
    margin-right: 16px;
  }
`;

const Modal = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  z-index: 40;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 60px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.color.textForeground};
`;

export { Layout };
