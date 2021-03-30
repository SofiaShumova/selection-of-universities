import React, { useState } from 'react';
import styles from './main-page.module.css';

import { Area } from '../../components/common';
import UniversityFilters from '../../components/university-filters';
import ListOfUniversities from '../../components/list-of-universities';

const MainPage = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities filters={filters} />}
        right={
          <UniversityFilters
            title="Фильтры"
            toggleFilter={(filter) => setFilters({ ...filters, ...filter })}
          />
        }
      />
    </div>
  );
};

export default MainPage;
