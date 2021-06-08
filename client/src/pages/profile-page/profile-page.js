import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Button } from '../../components/common';
import Spinner from '../../components/spinner';

import { authContext, userContext } from '../../contexts/auth-context';
import { useNotify } from '../../hooks';

import styles from './profile-page.module.css';

const AnalysisCard = ({ data }) => {
  return <div>card</div>;
};

const ProfilePage = () => {
  const { logout, updateValueWithServer } = useContext(authContext);
  const user = useContext(userContext);

  const history = useHistory();
  const { addWarnNotify } = useNotify();

  useEffect(async () => {
    await updateValueWithServer();
  }, []);

  const exit = async () => {
    await logout();
    // location.reload();
    // history.go(0);
    history.push('/login');
    addWarnNotify('Выход выполнен успешно!');
  };
  if (!user) return <Spinner />;
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Личный кабинет</h2>
      <div className={styles.profile__header}>
        <div className={styles.description}>
          <div className={styles.description__item}>👤 {user.name}</div>
          <div className={styles.description__item}>📪 {user.email}</div>
          {user.hasOwnProperty('city') && (
            <div className={styles.description__item}>🏙 {user.city.name}</div>
          )}
        </div>
        <div className={styles.actions}>
          <Button text="Выйти" onClick={exit} />
        </div>
      </div>
      <hr />
      <div className={styles.analysis}>
        {user?.analysis?.length ? (
          <>
            <h3>Сохраненные результаты:</h3>
            <div className={styles.analysis__wrapper}>
              {user.analysis.map(() => (
                <AnalysisCard key={uuid()} />
              ))}
            </div>
          </>
        ) : (
          <h3 className={styles.analysis__warning}>
            Вы не сохранили ни одного результата подбора!
          </h3>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
