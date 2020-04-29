import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@components/Layout';

import { SinglePostQuery } from '@graphqlTypes';

import styles from './Post.css';

interface Props {
  data: SinglePostQuery;
};

export default ({ data }: Props) => (
  <Layout>
    <article className={styles.main}>
      <MDXProvider components={{}}>
        <MDXRenderer>{data?.mdx?.body || ''}</MDXRenderer>
      </MDXProvider>
    </article>
  </Layout>
);
