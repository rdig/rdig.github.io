import React, { ReactNode, FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@components/Layout';
import Heading from '@components/Heading';
import DateComponent from '@components/DateComponent';
import Image from '@components/Image';
import Paragraph from '@components/Paragraph';

import { SinglePostQuery } from '@graphqlTypes';

import styles from './Post.module.css';

interface HeadingNode {
  children: string;
};

interface ImageNode {
  className: string;
  alt: string;
  title: string;
  src: string;
  srcSet: string;
  sizes: string;
  style: object;
  loading: 'eager' | 'lazy' | undefined;
};

interface ParagraphNode {
  children: string | ReactNode;
};

interface Props {
  data: SinglePostQuery;
};

const Post = ({ data }: Props) => {
  const customComponents = {
    h1: ({ children }: HeadingNode) => (
      <Heading type='h1' content={children} url={data?.mdx?.fields?.slug} />
    ),
    h2: ({ children }: HeadingNode) => (
      <Heading type='h2' content={children} />
    ),
    h3: ({ children }: HeadingNode) => (
      <Heading type='h3' content={children} />
    ),
    img: (props: ImageNode) => (
      <Image additionalClassName={styles.image} {...props} />
    ),
    p: ({ children }: ParagraphNode) => (
      <Paragraph additionalClassName={styles.paragraph}>
        {children}
      </Paragraph>
    ),
  };
  return (
    <Layout>
      <article className={styles.main}>
        <DateComponent date={data?.mdx?.fields?.date} />
        <MDXProvider components={customComponents}>
          <MDXRenderer>
            {data?.mdx?.body ?? ''}
          </MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};

export default Post as FC<Props>;
