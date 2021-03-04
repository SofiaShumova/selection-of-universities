import React from 'react';
import styles from './filtresUniversity.module.css';
import TestService from '../../service/TestService';
import { Select, Checkbox } from '../common';
import ListInputs from '../list-of-checked-inputs';

const FiltresUniversity = ({ title }) => {
  const {
    getCities,
    getPrograms,
    getDisciplines,
    getFormsEducation,
    getLevelsOfPreparation,
    getTypesUniversity,
  } = new TestService();
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <Select label="Город" data={getCities()} />
      <Select
        label="Направления подготовки"
        data={getPrograms()}
        multiply={true}
      />
      <ListInputs data={getDisciplines()} label="Предметы" />
      <Select
        label="Форма обучения"
        data={getFormsEducation()}
        multiply={true}
      />
      <Select
        label="Уровень подготовки"
        data={getLevelsOfPreparation()}
        multiply={true}
      />
      <Select label="Тип университета" data={getTypesUniversity()} />
      <Checkbox label="Общежитие" />
      <Checkbox label="Бюджетные места" />
      <Checkbox label="Военная кафедра" />
    </div>
  );
};

export default FiltresUniversity;
