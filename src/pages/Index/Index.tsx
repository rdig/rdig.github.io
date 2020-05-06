import React from 'react';

import Layout from '@components/Layout';
import PostsList from '@components/PostsList';
import Page from '@components/Page';
import SectionName from '@components/SectionName';

import { AllPostsQuery } from '@graphqlTypes';

/*
 * @TODO Refactor component
 */
import SEO from '../../components/seo';

interface Props {
  data: AllPostsQuery;
};

const IndexPage = ({ data }: Props) => {
  const latestPost = data?.allMdx?.edges[0] ?? { node: {}};
  const restOfPosts = data?.allMdx?.edges.slice(1);
  return (
    <Layout>
      <SEO title='Home' />
      <Page data={{ mdx: { ...latestPost.node }}} />
      {!!restOfPosts?.length && (
        <>
          <SectionName name='Other Posts' />
          <PostsList data={{ allMdx: { edges: [...restOfPosts] }}} />
        </>
      )}
    </Layout>
  );
};

export default IndexPage;
