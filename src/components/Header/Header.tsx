import React, { FC } from "react";
import { Link } from "gatsby";

import { ROUTES } from '@constants';

import styles from './Header.module.css';

interface Props {
  title?: string;
};

type DefaultProps = Readonly<Props>;

const defaultProps: DefaultProps = {
  title: '',
};

const Header = ({ title }: Props) => (
  <header className={styles.main}>
    <h1><Link to='/'>{title}</Link></h1>
    <ul>
      <li><Link to={ROUTES.ABOUT}>About Me</Link></li>
    </ul>
  </header>
);

Header.defaultProps = defaultProps;

export default Header as FC<Props>;
