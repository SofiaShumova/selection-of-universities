import React from 'react';
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

export default Input;
