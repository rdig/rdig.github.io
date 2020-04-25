import React, { FC } from 'react';

import styles from './Footer.module.css';

interface Props {
  title: string;
};

type DefaultProps = Readonly<Props>;

const defaultProps: DefaultProps = {
  title: '',
};

const Footer = ({ title }: Props) => (
  <footer className={styles.main}>
    © {new Date().getFullYear()} {title}
  </footer>
);

Footer.defaultProps = defaultProps;

export default Footer as FC<Props>;
