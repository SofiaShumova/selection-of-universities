import React from 'react';
import styles from './mainPage.module.css';

import { Area } from '../../common';
import UniversityFiltres from '../../university-filtres';
import ListOfUniversities from '../../list-of-universities';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities />}
        right={<UniversityFiltres title="Фильтры" />}
      />
    </div>
  );
};

export default MainPage;
