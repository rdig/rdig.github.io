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
    <p>Copyright {title} © {new Date().getFullYear()}</p>
    <p>Published, through various incarnations, since 2007</p>
  </footer>
);

Footer.defaultProps = defaultProps;

export default Footer as FC<Props>;
