import React, { FC, ReactNode } from 'react';

import Header from '@components/header';

import { fetchSiteTitle } from '@queries';
import { SiteTitleQuery } from '@graphqlTypes';

interface Props {
  children?: ReactNode,
};

const Layout = ({ children }: Props) => {
  const data: SiteTitleQuery = fetchSiteTitle();
  return (
    <>
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
};

export default Layout as FC<Props>;
