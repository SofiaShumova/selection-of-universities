import React, { useState, useEffect } from 'react';
import Area from '../../area/Area';
import { Input } from '../../common';

import styles from './mainPage.module.css';

import TestService from '../../../service/TestService';
import UniversityCard from '../../university-card/university-card';
import FiltresUniversity from '../../filtres-university/FiltresUniversity';

const MainPage = () => {
  const { getUniversities } = new TestService();

  const [data, setData] = useState([]);

  useEffect(() => {
    getUniversities().then((data) => setData(data));
  }, [getUniversities]);

  const leftCol = (
    <div className={styles.left_wrapper}>
      <Input placeholder="Поиск..." />
      {data.map((university, index) => {
        return (
          <UniversityCard
            key={university._id || index}
            university={university}
          />
        );
      })}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Area left={leftCol} right={<FiltresUniversity title="Фильтры" />} />
    </div>
  );
};

export default MainPage;
