import React, { FC } from 'react';

import ExternalLink from '@components/ExternalLink';

import { version, repository } from '../../../package.json';
import { LINKS } from '@constants';

import styles from './Footer.module.css';

interface Props {
  author: string;
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

const Footer = ({ author = '' }: Props) => (
  <footer className={styles.main}>
    <p>Copyright {author} © {new Date().getFullYear()}</p>
    <p>
      Version {version}.
      <Gatsby />
      <Github />
      <ReleaseNotes />
    </p>
  </footer>
);

export default Footer as FC<Props>;
