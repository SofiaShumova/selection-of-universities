import React from 'react';

const CriterionRating = ({ categories }) => {
  return (
    <div>
      <h2>Анализ. Оценка критериев</h2>
      {categories.map((category, index) => {
        return (
          <div key={category._id || index}>
            <h3>{category.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CriterionRating;
