import React, { FC } from 'react';
import dateFormat from 'dateformat';

import styles from './DateComponent.module.css';

interface Props {
  date: string | Date;
  additionalClassName?: string;
};

const DateComponent = ({
  date = new Date(),
  additionalClassName = '',
}: Props) => {
  return (
    <span className={`${styles.main} ${additionalClassName}`}>
      {dateFormat(new Date(date), 'mmmm dS, yyyy')}
    </span>
  );
};

export default DateComponent as FC<Props>;
