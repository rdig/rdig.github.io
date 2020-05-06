import React, { FC } from 'react';

import Heading from '@components/Heading';

import styles from './SectionName.module.css';

interface Props {
  name: string;
};

type DefaultProps = Readonly<Props>;

const defaultProps: DefaultProps = {
  name: 'Posts',
};

const SectionName = ({ name }: Props) => (
  <Heading
    content={name}
    type='h4'
    additionalClassName={styles.main}
  />
);

SectionName.defaultProps = defaultProps;

export default SectionName as FC<Props>;
