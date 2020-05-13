import React, { FC } from 'react';
import { Link } from 'gatsby';

import DateComponent from '@components/DateComponent';

import styles from './PostsListItem.module.css';

interface PostFields {
  title?: string | null;
  date?: string | null;
  slug?: string | null;
};

interface Post {
  fields?: PostFields | null;
  excerpt?: string;
};

interface Props {
  post?: Post;
};

const PostsListItem = ({ post }: Props) => (
  <li className={styles.main}>
    <div className={styles.title}>
      <h2>
        <Link to={post?.fields?.slug ?? '/'}>
          {post?.fields?.title}
        </Link>
      </h2>
      <DateComponent
        date={post?.fields?.date}
        additionalClassName={styles.date}
      />
    </div>
    <p>{post?.excerpt}</p>
  </li>
);

export default PostsListItem as FC<Props>;
