import React, { ReactNode, FC } from 'react';

import styles from './Code.module.css';

interface Props {
  children: ReactNode;
  additionalClassName?: string;
  language?: string;
};

const Code = ({ children, additionalClassName = '', language }: Props) => (
  <div className={styles.main}>
    <pre className={`${styles.code} ${additionalClassName}`}>
      {children}
    </pre>
    {language && <span className={styles.language}>{language}</span>}
  </div>
);

export default Code as FC<Props>;
