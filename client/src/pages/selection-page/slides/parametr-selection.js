import React from 'react';
import styles from './selection-page.module.css';
import GroupedCheckboxes from '../../../components/grouped-checkboxes';

const ParametrSelection = ({
  categories,
  onChangeCategory,
  onChangeCriterion,
}) => {
  return (
    <div>
      <h2 className={styles.title}>Критерии для анализа</h2>
      <div className={styles.criterions_box}>
        {categories.map((category) => (
          <GroupedCheckboxes
            key={category._id}
            category={category}
            onChangeCategory={onChangeCategory}
            onChangeCriterion={onChangeCriterion}
          />
        ))}
      </div>
    </div>
  );
};
export default ParametrSelection;
