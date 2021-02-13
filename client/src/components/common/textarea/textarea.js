import React from 'react';
import styles from './textarea.module.css';
const Textarea = ({ label, placeholder }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <textarea
        className={styles.input}
        type="text"
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
};

export default Textarea;
