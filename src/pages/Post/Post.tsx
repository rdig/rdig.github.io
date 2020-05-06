import React, { FC } from 'react';

import Layout from '@components/Layout';
import Page from '@components/Page';

import { SinglePostQuery } from '@graphqlTypes';

interface Props {
  data: SinglePostQuery;
};

const Post = ({ data }: Props) => (
  <Layout>
    <Page data={data} />
  </Layout>
);

export default Post as FC<Props>;
