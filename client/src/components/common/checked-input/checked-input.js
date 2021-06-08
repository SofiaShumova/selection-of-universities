import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../checkbox/checkbox';
import styles from './checked-input.module.css';

const CheckedInput = ({ label, defaultValue, onChange = () => {} }) => {
  const [visible, setVisible] = useState(!!defaultValue);
  const [value, setValue] = useState(Number(defaultValue) ?? 0);

  useEffect(() => {
    if (visible === false) {
      setValue(0);
    }
  }, [visible]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className={styles.box}>
      <div>
        <Checkbox
          checked={visible}
          label={label}
          onChange={({ target: { checked } }) => setVisible(checked)}
        />
      </div>
      {visible && (
        <input
          className={styles.input}
          value={value}
          onChange={({ target: { valueAsNumber } }) =>
            setValue(isNaN(valueAsNumber) ? 0 : valueAsNumber)
          }
          type="number"
          min="0"
          max="100"
        />
      )}
    </div>
  );
};

CheckedInput.propTypes = {
  label: PropTypes.string,
};

export default CheckedInput;
