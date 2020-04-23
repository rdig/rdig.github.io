import React, { FC, ReactNode } from 'react';

import Header from '@components/header';

import { fetchSiteTitle } from '@queries';
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
  return (
    <div className={styles.main}>
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
};

export default Layout as FC<Props>;
