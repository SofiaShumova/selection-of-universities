import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { CheckedInput } from '../common';
import styles from './list-inputs.module.css';

const ListInputs = ({
  label,
  height = '300px',
  defaultValue,
  onChange = () => {},
}) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    onChange({ disciplines: value });
  }, [value]);

  const list = useMemo(
    () =>
      defaultValue.map((item) => (
        <li key={uuid()}>
          <CheckedInput
            label={item?.prop?.name}
            defaultValue={item?.value}
            onChange={(value) => {
              setValue((prev) => ({
                ...prev,
                [item.prop._id]: { discipline: item.prop, value },
              }));
            }}
          />
        </li>
      )),
    [defaultValue.length]
  );

  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <ul className={styles.list} style={{ height }}>
        {list}
      </ul>
    </div>
  );
};

ListInputs.propTypes = {
  label: PropTypes.string,
  height: PropTypes.string,
};

export default ListInputs;
