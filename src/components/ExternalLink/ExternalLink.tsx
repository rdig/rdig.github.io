import React, { ReactNode, FC } from 'react';

import styles from './ExternalLink.module.css';

interface Props {
  to: string;
  children?: ReactNode | string;
  additionalClassName?: string;
};

const ExternalLink = ({
  to = '/',
  additionalClassName = '',
  children,
}: Props) => (
  <a
    href={to}
    target='_blank'
    rel='noopener noreferrer'
    className={`${styles.main} ${additionalClassName}`}
  >
    {children}
  </a>
);

export default ExternalLink as FC<Props>;
