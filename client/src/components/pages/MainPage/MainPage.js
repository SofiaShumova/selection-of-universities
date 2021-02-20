import React from 'react';
import Area from '../../area/Area';
import Checkbox from '../../common/checkbox/checkbox';
import Input from '../../common/input';
import Select from '../../common/select';
import ListInputs from '../../list-of-checked-inputs/ListInputs';
import styles from './mainPage.module.css';
import TestService from '../../../service/testService';
import UniversityCard from '../../university-card/university-card';
import FiltresUniversity from '../../filtres-university/FiltresUniversity';

const MainPage = () => {
  const { getUniversities } = new TestService();

  const leftCol = (
    <div className={styles.left_wrapper}>
      <Input placeholder="Поиск..." />
      {getUniversities().map((university, index) => {
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
