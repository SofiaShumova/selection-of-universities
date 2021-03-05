import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../common';
import styles from './groupedCheckboxes.module.css';

const GroupedCheckboxes = ({
  category,
  onChangeCategory,
  onChangeCriterion,
}) => {
  const [isCheckedGroup, setIsCheckedGroup] = useState(category.checked);
  return (
    <div>
      <Checkbox
        label={category.name}
        onChange={() => {
          setIsCheckedGroup(!isCheckedGroup);
          onChangeCategory(category);
        }}
        checked={category.checked}
      />
      <ul className={`${styles.list} ${!isCheckedGroup && styles.disabled}`}>
        {category.criterions &&
          category.criterions.map((criterion) => (
            <li key={criterion._id}>
              <Checkbox
                label={criterion.name}
                onChange={() => onChangeCriterion(category, criterion)}
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
