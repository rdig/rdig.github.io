import React, { FC, ReactNode } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import MessageBar from '@components/MessageBar';

import { fetchSiteTitle } from './queries';
import { SiteTitleQuery } from '@graphqlTypes';

import '@styles/normalize.css';
import '@styles/fonts.css';
import '@styles/variables.css';
import styles from './Layout.module.css';

interface Props {
  children?: ReactNode,
};

const Layout = ({ children }: Props) => {
  const data: SiteTitleQuery = fetchSiteTitle();
  const title = data?.site?.siteMetadata?.title || '';
  const author = data?.site?.siteMetadata?.author || '';
  return (
    <>
      <MessageBar />
      <div className={styles.main}>
        <Header title={title} />
        <main>{children}</main>
        <Footer author={author} />
      </div>
    </>
  )
};

export default Layout as FC<Props>;
