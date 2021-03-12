import React, { useState } from 'react';
import styles from './mainPage.module.css';

import { Area } from '../../common';
import UniversityFiltres from '../../university-filtres';
import ListOfUniversities from '../../list-of-universities';

const MainPage = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities filters={filters} />}
        right={
          <UniversityFiltres
            title="Фильтры"
            toggleFilter={(filter) => setFilters({ ...filters, ...filter })}
          />
        }
      />
    </div>
  );
};

export default MainPage;
