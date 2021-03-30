import React from 'react';
import PropTypes from 'prop-types';

import styles from './progress-bar.module.css';

const ProgressBar = ({ label, value }) => {
  return (
    <div className={styles.box}>
      <span className={styles.label}>{label}</span>

      <div className={styles.progress}>
        <div
          className={styles.progress_fill}
          style={{
            width: `${value}%`,
            background:
              value < 30 ? '#E78262' : value < 50 ? '#E7D962' : '#94E762',
          }}
        ></div>
      </div>

      <span className={styles.procent}>{value}%</span>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

export default ProgressBar;
