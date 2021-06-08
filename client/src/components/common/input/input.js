import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ label, ...props }) => {
  return (
    <div className={styles.box}>
      {label && <label className={styles.label}>{label}:</label>}
      <input className={styles.input} {...props} />
      <span></span>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
