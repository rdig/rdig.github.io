import React, { FC } from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';

import styles from './Heading.module.css';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content: string;
  url?: string | null;
  additionalClassName?: string;
};

const Heading = ({
  type: HeadingElementType = 'h1',
  content,
  url = '#',
  additionalClassName = '',
}: Props) => {
  const className = `${styles.main} ${additionalClassName}`;
  const anchor = slugify(content, {
    lower: true,
    strict: true,
  });
  if (HeadingElementType === 'h1') {
    return (
      <HeadingElementType className={className}>
        <Link to={`${url}`}>{content}</Link>
      </HeadingElementType>
    );
  }
  return (
    <HeadingElementType className={className}>
      <a id={anchor} href={`#${anchor}`}>{content}</a>
    </HeadingElementType>
  );
};

export default Heading as FC<Props>;
