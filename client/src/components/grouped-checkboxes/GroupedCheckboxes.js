import React, { useState } from 'react';
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

export default GroupedCheckboxes;
