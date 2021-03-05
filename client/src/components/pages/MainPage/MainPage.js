import React from 'react';
import styles from './mainPage.module.css';
import TestService from '../../../service/TestService';

import { Area } from '../../common';
import UniversityFiltres from '../../university-filtres';
import ListOfUniversities from '../../list-of-universities';
import { useStateWithPromise } from '../../hooks';

const MainPage = () => {
  const { getUniversities } = new TestService();

  const [data] = useStateWithPromise([], getUniversities);

  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities data={data} />}
        right={<UniversityFiltres title="Фильтры" />}
      />
    </div>
  );
};

export default MainPage;
