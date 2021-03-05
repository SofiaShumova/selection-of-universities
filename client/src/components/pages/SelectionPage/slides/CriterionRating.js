import React from 'react';
import { Slider } from '../../../common';
import styles from './selectionPage.module.css';

const CriterionRating = ({ categories, onChange }) => {
  return (
    <div>
      <h2 className={styles.title}>Анализ. Оценка критериев</h2>
      {categories.map(({ _id, name, pairs }) => {
        return (
          pairs.length && (
            <div key={_id}>
              <h3>{name}</h3>
              {pairs.map((pair, index) => (
                <Slider
                  key={index}
                  startLabel={pair.first.name}
                  endLabel={pair.second.name}
                  onChange={(value) => onChange(pair, value)}
                  initialValue={pair.rate}
                />
              ))}
            </div>
          )
        );
      })}
    </div>
  );
};

export default CriterionRating;
