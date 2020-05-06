import React, { FC } from 'react';

import Heading from '@components/Heading';

import styles from './SectionName.module.css';

interface Props {
  name: string;
};

const SectionName = ({ name = 'Posts' }: Props) => (
  <Heading
    content={name}
    type='h4'
    additionalClassName={styles.main}
  />
);

export default SectionName as FC<Props>;
