import React, { FC } from 'react';

import ExternalLink from '@components/ExternalLink';

import { version, repository } from '../../../package.json';
import { LINKS } from '@constants';

import styles from './Footer.module.css';

interface Props {
  title: string;
};

type DefaultProps = Readonly<Props>;

const defaultProps: DefaultProps = {
  title: '',
};

const Gatsby = () => (
  <>
    &nbsp;Built on <ExternalLink to={LINKS.GATSBY}>Gatsby</ExternalLink>.
  </>
);

const Github = () => (
  <>
    &nbsp;Hosted on <ExternalLink to={LINKS.GH_PAGES}>
      Github Pages
    </ExternalLink>.
  </>
);

const ReleaseNotes = () => (
  <>
    &nbsp;<ExternalLink to={`${repository?.url}/releases/${version}`}>
      Release Notes
    </ExternalLink>
  </>
);

const Footer = ({ title }: Props) => (
  <footer className={styles.main}>
    <p>Copyright {title} © {new Date().getFullYear()}</p>
    <p>
      Version {version}.
      <Gatsby />
      <Github />
      <ReleaseNotes />
    </p>
  </footer>
);

Footer.defaultProps = defaultProps;

export default Footer as FC<Props>;
