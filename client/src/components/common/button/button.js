import React from 'react';
import styles from './button.module.css';
const Button = ({ text, className, onClick = null, type = null }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button
        className={styles.button}
        onClick={() => {
          onClick && onClick();
        }}
        type={type ? type : ''}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
