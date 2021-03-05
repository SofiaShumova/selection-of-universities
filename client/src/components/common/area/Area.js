import React from 'react';
import PropTypes from 'prop-types';

import styles from './area.module.css';

const Area = ({ left, right }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

Area.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Area;
