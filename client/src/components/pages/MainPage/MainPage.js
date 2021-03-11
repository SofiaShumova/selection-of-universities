import React, { useState } from 'react';
import styles from './mainPage.module.css';

import { Area } from '../../common';
import UniversityFiltres from '../../university-filtres';
import ListOfUniversities from '../../list-of-universities';

const MainPage = () => {
  const [filters, setFilters] = useState({});
  // use effect dont working in child element
  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities filters={filters} />}
        right={
          <UniversityFiltres
            title="Фильтры"
            addFilter={(filter) => setFilters(Object.assign(filters, filter))}
          />
        }
      />
    </div>
  );
};

export default MainPage;
