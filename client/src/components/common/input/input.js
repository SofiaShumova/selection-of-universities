import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ label, placeholder, type = 'text', name }) => {
  return (
    <div className={styles.box}>
      {label && (
        <label htmlFor={name ? name : ''} className={styles.label}>
          {label}:
        </label>
      )}
      <input
        name={name ? name : ''}
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
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
