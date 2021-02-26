import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Pavel Keyzik's Personal Site</title>
      </Head>
      {props.children}
    </React.Fragment>
  );
}

export { Layout };
