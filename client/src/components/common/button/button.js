import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({
  text,
  className,
  onClick = () => {},
  type = '',
  children,
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button className={styles.button} onClick={onClick} type={type}>
        {text || children}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
