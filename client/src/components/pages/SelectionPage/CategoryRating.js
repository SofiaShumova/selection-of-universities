import React from 'react';
import { Slider } from '../../common';
import styles from './selectionPage.module.css';

const CategoryRating = ({ pairs }) => (
  <div>
    <h2 className={styles.title}>Анализ. Оценка категорий</h2>
    <div>
      {pairs.map((assessment, index) => (
        <Slider
          key={index}
          startLabel={assessment.first.name}
          endLabel={assessment.second.name}
        />
      ))}
    </div>
  </div>
);
export default CategoryRating;
