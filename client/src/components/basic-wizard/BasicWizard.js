import React, { useState } from 'react';
import styles from './basicWizard.module.css';
import { Button } from '../common';

const BasicWizard = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const nextPage = () => {
    setCurrent(current + 1);
  };
  const previousPage = () => {
    setCurrent(current - 1);
  };

  const isPenultimate = () => current === children.length - 2;
  const isLast = () => current === children.length - 1;
  const isFirst = () => current === 0;

  return (
    <>
      {children[current]}
      <div className={styles.box}>
        {!isFirst() && (
          <Button
            className={styles.previuos}
            onClick={previousPage}
            text="Назад"
          />
        )}
        {!isLast() && (
          <Button
            onClick={nextPage}
            text={isPenultimate() ? 'Получить результат' : 'Далее'}
          />
        )}
      </div>
    </>
  );
};

export default BasicWizard;
