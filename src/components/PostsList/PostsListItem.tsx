import React, { FC } from 'react';
import { Link } from 'gatsby';
import dateFormat from 'dateformat';

import styles from './PostsListItem.css';

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
      <span className={styles.date}>
        {dateFormat(new Date(date), 'mmmm dS, yyyy')}
      </span>
    </div>
    <p>{excerpt}</p>
  </li>
);

export default PostsListItem as FC<Props>;
