import React, { useState } from 'react';
import styles from './slider.module.css';

const Slider = ({ startLabel, endLabel, initialValue }) => {
  const [value, setValue] = useState(0);

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
        }}
      />
      <span className={styles.label}> {endLabel}</span>
    </div>
  );
};

export default Slider;
