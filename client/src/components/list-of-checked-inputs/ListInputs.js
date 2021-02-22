import React from 'react';
import { CheckedInput } from '../common';
import styles from './ListInputs.module.css';

const ListInputs = ({ data, label, height = '300px' }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <ul className={styles.list} style={{ height }}>
        {data &&
          data.map((item, index) => {
            return (
              <li key={item._id || index}>
                <CheckedInput label={item.name} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListInputs;
