import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './universityFilters.module.css';
import { ServiceContext } from '../../contexts';
import { useRequest } from '../../hooks';

import { Select, Checkbox } from '../common';
import ListInputs from '../list-of-checked-inputs';
import Spinner from '../spinner';

const UniversityFiltres = ({ title, toggleFilter = () => {} }) => {
  const {
    getCities,
    getPrograms,
    getDisciplines,
    getFormsEducation,
    getLevelsOfPreparation,
    getTypesUniversity,
  } = useContext(ServiceContext);

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
        onChange={(city) => {
          toggleFilter({ city });
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
        onChange={(type) => {
          toggleFilter({ type });
        }}
      />
      <Checkbox
        label="Общежитие"
        onChange={(dormitory) => {
          toggleFilter({ dormitory });
        }}
      />
      {/* <Checkbox label="Бюджетные места" /> */}
      <Checkbox
        label="Военная кафедра"
        onChange={(militaryDepartment) => {
          toggleFilter({ militaryDepartment });
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
