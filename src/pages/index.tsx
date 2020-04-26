import React from 'react';
import { graphql } from "gatsby"

import Layout from '@components/Layout';
import PostsList from '@components/PostsList';

import { AllPostsQuery } from '@graphqlTypes';

/*
 * @TODO Refactor component
 */
import SEO from "../components/seo"

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

export const allPostsQuery = graphql`
  query AllPosts {
    allMdx(sort: {fields: fields___date, order: DESC}) {
      edges {
        node {
          id
          fields {
            slug
            date
            title
          }
          excerpt
        }
      }
    }
  }
`;
