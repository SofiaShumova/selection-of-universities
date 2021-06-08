import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

import { userContext, authContext } from '../../../contexts/auth-context';
import { serviceContext } from '../../../contexts/service-context';

import { useNotify } from '../../../hooks';

import { Button, ProgressBar } from '../../../components/common';
import Spinner from '../../../components/spinner';
import UniversityCard from '../../../components/university-card';

import styles from './selection-page.module.css';

const ResultPage = ({ result }) => {
  const user = useContext(userContext);
  const auth = useContext(authContext);

  const service = useContext(serviceContext);

  const history = useHistory();
  const { addSuccessNotify, addErrorNotify } = useNotify();

  const saveResult = async () => {
    try {
      const analysis = result.result.map((value, index) => ({
        procent: Math.round(value * 100),
        university: result.universities[index],
      }));

      await service.addAnalysis(user._id, {
        result: analysis,
      });

      // await auth.updateValueWithServer();
      addSuccessNotify('Результат успешно сохранен в личный кабинет!');
    } catch (error) {
      addErrorNotify('Ошибка сохранения результата!');
      console.log(error);
    }
  };

  if (!result) return <Spinner />;
  return (
    <div>
      <h2 className={styles.result__title}>Результат</h2>
      <div className={styles.result__rating}>
        {result.result.map((value, index) => (
          <div key={uuid()} className={styles.result__item}>
            <ProgressBar
              value={Math.round(value * 100)}
              label={result.universities[index].name}
            />
          </div>
        ))}
      </div>
      <hr />
      {user ? (
        <Button
          className={styles.result__btn}
          text="Сохранить результат"
          onClick={saveResult}
        />
      ) : (
        <div className={styles.result__warning}>
          Для сохранения результата необходимо авторизоваться!
        </div>
      )}
      <div>
        {result.universities.map((university) => (
          <UniversityCard key={university._id} university={university} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
