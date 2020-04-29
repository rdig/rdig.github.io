import React from 'react';

import Layout from '@components/Layout';
import PostsList from '@components/PostsList';

import { AllPostsQuery } from '@graphqlTypes';

/*
 * @TODO Refactor component
 */
import SEO from '../../components/seo';

interface Props {
  data: AllPostsQuery;
};

const IndexPage = ({ data }: Props) => (
    <Layout>
      <SEO title='Home' />
      <PostsList data={data} />
    </Layout>
  );

export default IndexPage;
