import React from 'react';
import styles from './area.module.css';

const Area = ({ left, right }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default Area;
