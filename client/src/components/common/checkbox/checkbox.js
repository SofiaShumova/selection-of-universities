import React from 'react';
import styles from './checkbox.module.css';
import tick from './tick.png';

const Checkbox = ({ label, changeValue }) => {
  return (
    <div className={styles.box}>
      <div className={styles.rectangle}>
        <input
          type="checkbox"
          className={styles.checkbox_hidden}
          onChange={(e) => {
            if (changeValue) changeValue(e.target.checked);
          }}
        />
        <img src={tick} alt="tick icon" className={styles.tick} />
      </div>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Checkbox;
