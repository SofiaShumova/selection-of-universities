import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../common';
import styles from './grouped-checkboxes.module.css';

const GroupedCheckboxes = ({
  category,
  onChangeCategory,
  onChangeCriterion,
}) => {
  return (
    <div>
      <Checkbox
        label={category.name}
        onChange={() => onChangeCategory(category._id)}
        checked={category.checked}
      />
      <ul className={`${styles.list} ${!category.checked && styles.disabled}`}>
        {category.criterions &&
          category.criterions.map((criterion) => (
            <li key={criterion._id}>
              <Checkbox
                label={criterion.name}
                onChange={() => onChangeCriterion(category._id, criterion._id)}
                checked={criterion.checked}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

GroupedCheckboxes.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    checked: PropTypes.bool,
    criterions: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.name,
        checked: PropTypes.bool,
      })
    ),
  }),
  onChangeCategory: PropTypes.func,
  onChangeCriterion: PropTypes.func,
};

export default GroupedCheckboxes;
