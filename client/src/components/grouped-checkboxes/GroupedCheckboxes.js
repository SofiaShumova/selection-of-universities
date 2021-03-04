import React, { useState } from 'react';
import { Checkbox } from '../common';
import styles from './groupedCheckboxes.module.css';

const GroupedCheckboxes = ({
  category,
  onChangeCategory,
  onChangeCriterion,
}) => {
  const [enabledList, setEnabledList] = useState(category.checked);
  return (
    <div>
      <Checkbox
        label={category.name}
        onChange={() => {
          setEnabledList(!enabledList);
          onChangeCategory(category);
        }}
        checked={category.checked}
      />
      <ul className={`${styles.list} ${!enabledList && styles.disabled}`}>
        {category.criterions &&
          category.criterions.map((criterion, index) => (
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
