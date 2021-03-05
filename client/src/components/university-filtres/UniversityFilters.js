import React from 'react';
import PropTypes from 'prop-types';

import styles from './universityFiltres.module.css';
import TestService from '../../service/TestService';
import { useStateWithPromise } from '../hooks';

import { Select, Checkbox } from '../common';
import ListInputs from '../list-of-checked-inputs';

const UniversityFiltres = ({ title }) => {
  const {
    getCities,
    getPrograms,
    getDisciplines,
    getFormsEducation,
    getLevelsOfPreparation,
    getTypesUniversity,
  } = new TestService();

  const [cities] = useStateWithPromise([], getCities);
  const [programs] = useStateWithPromise([], getPrograms);
  const [disciplines] = useStateWithPromise([], getDisciplines);
  const [formsEducation] = useStateWithPromise([], getFormsEducation);
  const [levelsOfPreparation] = useStateWithPromise([], getLevelsOfPreparation);
  const [typesUniversity] = useStateWithPromise([], getTypesUniversity);

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <Select label="Город" data={cities} />
      <Select label="Направления подготовки" data={programs} multiply={true} />
      <ListInputs data={disciplines} label="Предметы" />
      <Select label="Форма обучения" data={formsEducation} multiply={true} />
      <Select
        label="Уровень подготовки"
        data={levelsOfPreparation}
        multiply={true}
      />
      <Select label="Тип университета" data={typesUniversity} />
      <Checkbox label="Общежитие" />
      <Checkbox label="Бюджетные места" />
      <Checkbox label="Военная кафедра" />
    </div>
  );
};

UniversityFiltres.propTypes = {
  title: PropTypes.string,
};

export default UniversityFiltres;
