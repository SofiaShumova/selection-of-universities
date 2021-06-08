import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './basic-wizard.module.css';
import { Button } from '../common';

const BasicWizard = ({
  children,
  lastAction = () => true,
  finalButtonText = 'Получить результат',
}) => {
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
        {isPenultimate() && (
          <Button
            onClick={() => {
              if (lastAction()) nextPage();
            }}
            text={finalButtonText}
          />
        )}
        {(!isLast() && !isPenultimate() && (
          <Button onClick={nextPage} text={'Далее'} />
        )) ||
          null}
      </div>
    </>
  );
};

BasicWizard.propTypes = {
  children: PropTypes.node,
};

export default BasicWizard;
