import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../checkbox/checkbox';
import styles from './checked-input.module.css';

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

CheckedInput.propTypes = {
  label: PropTypes.string,
};

export default CheckedInput;
