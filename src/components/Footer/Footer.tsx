import React, { FC } from 'react';

import styles from './Footer.module.css';

interface Props {
  title: string;
};

const Footer = ({ title }: Props) => (
  <footer className={styles.main}>
    © {new Date().getFullYear()} {title}
  </footer>
);

export default Footer as FC<Props>;
