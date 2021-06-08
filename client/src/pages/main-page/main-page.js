import React, { useState } from 'react';
import styles from './main-page.module.css';

import { Area } from '../../components/common';
import UniversityFilters from '../../components/university-filters';
import ListOfUniversities from '../../components/list-of-universities';

const MainPage = () => {
  const [filters, setFilters] = useState({});
  const toggleFilter = (obj) => setFilters((prev) => ({ ...prev, ...obj }));

  return (
    <div className={styles.wrapper}>
      <Area
        left={<ListOfUniversities filters={filters} />}
        right={
          <>
            <UniversityFilters title="Фильтры" toggleFilter={toggleFilter} />
          </>
        }
      />
    </div>
  );
};

export default MainPage;
