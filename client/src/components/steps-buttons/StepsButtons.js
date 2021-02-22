import React from 'react';
import styles from './stepsButtons.module.css';
import Button from '../common/button';

const StepsButtons = ({
  hasPrevious = true,
  hasNext = true,
  nextHandler,
  previousHandler,
}) => {
  return (
    <div className={styles.box}>
      {hasPrevious && (
        <Button
          className={styles.previuos}
          onClick={() => {
            if (previousHandler) previousHandler();
          }}
          text="Назад"
        />
      )}
      {hasNext && (
        <Button
          onClick={() => {
            if (nextHandler) nextHandler();
          }}
          text="Далее"
        />
      )}
    </div>
  );
};

export default StepsButtons;
