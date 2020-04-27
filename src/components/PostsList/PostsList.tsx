import React, { FC } from "react"

import PostsListItem from './PostsListItem';

import { AllPostsQuery } from '@graphqlTypes';

import styles from './PostsList.css';

interface Props {
  data: AllPostsQuery;
};

const PostsList = ({ data }: Props) => {
  return (
    <section className={styles.main}>
      <ul>
        {data?.allMdx?.edges.map(post =>
          <PostsListItem
            key={post?.node.id}
            post={post?.node}
          />
        )}
      </ul>
    </section>
  );
};

export default PostsList as FC<Props>;
