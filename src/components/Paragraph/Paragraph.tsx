import React, { ReactNode, FC } from 'react';

import styles from './Paragraph.module.css';

interface Props {
  children?: 'string' | ReactNode;
  additionalClassName?: string;
};

const Paragraph = ({ children, additionalClassName = '' }: Props) => (
  <p className={`${styles.main} ${additionalClassName}`}>{children}</p>
);

export default Paragraph as FC<Props>;
