import React, { useState } from 'react';
import styles from './checkbox.module.css';
import tick from './tick.png';

const Checkbox = ({ label, onChange, checked }) => {
  const [state, setState] = useState(checked || false);
  const handler = (e) => {
    if (onChange) onChange(e.target.checked);
    setState(e.target.checked);
  };

  return (
    <div className={styles.box}>
      <div className={styles.rectangle}>
        <input
          type="checkbox"
          className={styles.checkbox_hidden}
          onChange={handler}
          checked={state}
        />
        <img src={tick} alt="tick icon" className={styles.tick} />
      </div>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Checkbox;
