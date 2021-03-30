import React from 'react';
import { Slider } from '../../../components/common';
import styles from './selectionPage.module.css';

const CategoryRating = ({ pairs, onChange }) => (
  <div>
    <h2 className={styles.title}>Анализ. Оценка категорий</h2>
    <div>
      {pairs.map((pair, index) => (
        <Slider
          key={index}
          startLabel={pair.first.name}
          endLabel={pair.second.name}
          initialValue={pair.rate}
          onChange={(value) => onChange(pair, value)}
        />
      ))}
    </div>
  </div>
);
export default CategoryRating;
