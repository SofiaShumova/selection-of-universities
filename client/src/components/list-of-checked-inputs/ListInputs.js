import React from 'react';
import PropTypes from 'prop-types';

import { CheckedInput } from '../common';
import styles from './ListInputs.module.css';

const ListInputs = ({ data, label, height = '300px' }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <ul className={styles.list} style={{ height }}>
        {data.map((item) => (
          <li key={item._id}>
            <CheckedInput label={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ListInputs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  height: PropTypes.string,
};

export default ListInputs;
