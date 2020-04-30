import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@components/Layout';
import Heading from '@components/Heading';

import { SinglePostQuery } from '@graphqlTypes';

import styles from './Post.css';

interface CustomComponentProps {
  children: string;
};

interface Props {
  data: SinglePostQuery;
};

export default ({ data }: Props) => {
  const customComponents = {
    h1: ({ children }: CustomComponentProps) => (
      <Heading type='h1' content={children} url={data?.mdx?.fields?.slug} />
    ),
    h2: ({ children }: CustomComponentProps) => (
      <Heading type='h2' content={children} />
    ),
    h3: ({ children }: CustomComponentProps) => (
      <Heading type='h3' content={children} />
    ),
  };
  return (
    <Layout>
      <article className={styles.main}>
        <span className={styles.date}>{data?.mdx?.fields?.date}</span>
        <MDXProvider components={customComponents}>
          <MDXRenderer>
            {data?.mdx?.body ?? ''}
          </MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};
