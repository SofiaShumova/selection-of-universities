import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './checkbox.module.css';
import tick from './tick.png';

const Checkbox = ({ label, onChange = () => {}, checked = false }) => {
  const handler = ({ target: { checked } }) => {
    onChange(checked);
  };

  return (
    <div className={styles.box}>
      <div className={styles.rectangle}>
        <input
          type="checkbox"
          className={styles.checkbox_hidden}
          onChange={handler}
          checked={checked}
        />
        <img src={tick} alt="tick icon" className={styles.tick} />
      </div>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
