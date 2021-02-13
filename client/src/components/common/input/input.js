import React from 'react';
import styles from './input.module.css';
const Input = ({ label, placeholder }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
