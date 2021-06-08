import React from 'react';
import { Slider } from '../../../components/common';
import styles from './selection-page.module.css';

const CriterionRating = ({ categories, onChange }) => {
  const components = categories.map(({ _id, name, pairs }) => {
    return (
      pairs.length && (
        <div key={_id}>
          <h3>{name}</h3>
          {pairs.map((pair, index) => (
            <Slider
              key={index}
              startLabel={pair.first.name}
              endLabel={pair.second.name}
              onChange={(value) => onChange(_id, pair, value)}
              initialValue={pair.rate}
            />
          ))}
        </div>
      )
    );
  });
  return (
    <div>
      <h2 className={styles.title}>Анализ. Оценка критериев</h2>
      {components.length ? components : 'Недостаточно критериев 🙁'}
    </div>
  );
};

export default CriterionRating;
