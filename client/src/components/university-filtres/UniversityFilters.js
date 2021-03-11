import React from 'react';
import PropTypes from 'prop-types';

import styles from './universityFiltres.module.css';
import TestService from '../../service/TestService';
import { useRequest } from '../hooks';

import { Select, Checkbox } from '../common';
import ListInputs from '../list-of-checked-inputs';
import Spinner from '../spinner';

const UniversityFiltres = ({ title, addFilter }) => {
  const {
    getCities,
    getPrograms,
    getDisciplines,
    getFormsEducation,
    getLevelsOfPreparation,
    getTypesUniversity,
  } = new TestService();

  const { data: cities, isLoading: loadingCities } = useRequest([], getCities);
  const { data: programs, isLoading: loadingPrograms } = useRequest(
    [],
    getPrograms
  );
  const { data: disciplines, isLoading: loadingDisciplines } = useRequest(
    [],
    getDisciplines
  );
  const { data: formsEducation, isLoading: loadingFormsEducation } = useRequest(
    [],
    getFormsEducation
  );
  const {
    data: levelsOfPreparation,
    isLoading: loadingLevelsOfPreparation,
  } = useRequest([], getLevelsOfPreparation);
  const {
    data: typesUniversity,
    isLoading: loadingTypesUniversity,
  } = useRequest([], getTypesUniversity);

  if (
    loadingCities ||
    loadingDisciplines ||
    loadingFormsEducation ||
    loadingLevelsOfPreparation ||
    loadingPrograms ||
    loadingTypesUniversity
  ) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <Select
        label="Город"
        data={cities}
        onChange={(cities) => {
          addFilter({ cities });
        }}
      />
      {/* <Select label="Направления подготовки" data={programs} multiply={true} />
      <ListInputs data={disciplines} label="Предметы" />
      <Select label="Форма обучения" data={formsEducation} multiply={true} />
      <Select
        label="Уровень подготовки"
        data={levelsOfPreparation}
        multiply={true}
      /> */}
      <Select
        label="Тип университета"
        data={typesUniversity}
        onChange={(typesUniversity) => {
          addFilter({ typesUniversity });
        }}
      />
      <Checkbox
        label="Общежитие"
        onChange={(dormitory) => {
          addFilter({ dormitory });
        }}
      />
      {/* <Checkbox label="Бюджетные места" /> */}
      <Checkbox
        label="Военная кафедра"
        onChange={(militaryDepartment) => {
          addFilter({ militaryDepartment });
        }}
      />
    </div>
  );
};

UniversityFiltres.propTypes = {
  title: PropTypes.string,
  addFilter: PropTypes.func,
};

export default UniversityFiltres;
