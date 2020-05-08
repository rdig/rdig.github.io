import React, { FC } from 'react';
import { Link } from 'gatsby';

import DateComponent from '@components/DateComponent';

import styles from './PostsListItem.module.css';

interface PostExcerpt {
  fields?: {
    title?: string;
    date?: string;
    slug?: string;
  };
  excerpt?: string;
};

interface Props {
  post?: PostExcerpt;
};

const PostsListItem = ({
  post: {
    fields: {
      title,
      date,
      slug,
    },
    excerpt,
}}: any) => (
  <li className={styles.main}>
    <div className={styles.title}>
      <h2><Link to={slug}>{title}</Link></h2>
      <DateComponent date={date} additionalClassName={styles.date} />
    </div>
    <p>{excerpt}</p>
  </li>
);

export default PostsListItem as FC<Props>;
