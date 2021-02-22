import React, { useState } from 'react';
import Checkbox from '../checkbox/checkbox';
import styles from './checkedInput.module.css';

const CheckedInput = ({ label }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.box}>
      <div>
        <Checkbox label={label} onChange={(val) => setVisible(val)} />
      </div>
      {visible && <input className={styles.input} type="text" />}
    </div>
  );
};

export default CheckedInput;
