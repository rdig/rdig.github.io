import React, { FC } from 'react';
import dateFormat from 'dateformat';

import styles from './DateComponent.module.css';

interface Props {
  date?: string | Date | null;
  additionalClassName?: string;
};

const DateComponent = ({
  date,
  additionalClassName = '',
}: Props) => {
  return (
    <span className={`${styles.main} ${additionalClassName}`}>
      {dateFormat(new Date(date ?? new Date()), 'mmmm dS, yyyy')}
    </span>
  );
};

export default DateComponent as FC<Props>;
