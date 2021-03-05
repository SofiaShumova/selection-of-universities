import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './slider.module.css';

const Slider = ({ startLabel, endLabel, initialValue = 0, onChange }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.box}>
      <span className={styles.label}> {startLabel}</span>
      <input
        className={styles.input}
        max={100}
        min={-100}
        value={value}
        type="range"
        onChange={({ target: { value } }) => {
          setValue(value);
          onChange(value);
        }}
      />
      <span className={styles.label}> {endLabel}</span>
    </div>
  );
};

Slider.propTypes = {
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  initialValue: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
