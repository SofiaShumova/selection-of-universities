import React from 'react';
import PropTypes from 'prop-types';

import styles from './textarea.module.css';

const Textarea = ({ label, ...props }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <textarea className={styles.input} rows={6} {...props} />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
