import React from 'react';
import { Slider } from '../../../components/common';
import styles from './selection-page.module.css';

const CategoryRating = ({ pairs, onChange }) => {
  const components = pairs.map((pair, index) => (
    <Slider
      key={index}
      startLabel={pair.first.name}
      endLabel={pair.second.name}
      initialValue={pair.rate}
      onChange={(value) => onChange(pair, value)}
    />
  ));
  return (
    <div>
      <h2 className={styles.title}>Анализ. Оценка категорий</h2>
      <div>
        {!!components.length ? components : 'Недостаточно категорий 🙁'}
      </div>
    </div>
  );
};
export default CategoryRating;
