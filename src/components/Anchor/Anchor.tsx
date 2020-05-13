import React, { ReactNode, FC } from 'react';
import { Link } from 'gatsby';

import ExternalLink from '@components/ExternalLink';

import styles from './Anchor.module.css';

interface Props {
  to: string;
  children?: 'string' | ReactNode;
  additionalClassName?: string;
};

const Anchor = ({
  to = '/',
  children,
  additionalClassName = ''
}: Props) => {
  /**
   * Maybe this check should be done more competently?
   */
  if (to.includes('http')) {
    return (
      <ExternalLink
        to={to}
        additionalClassName={`${styles.main} ${additionalClassName}`}
        children={children}
      />

    );
  }
  return (
    <Link
      to={to}
      className={`${styles.main} ${additionalClassName}`}
      children={children}
    />
  );
};

export default Anchor as FC<Props>;
