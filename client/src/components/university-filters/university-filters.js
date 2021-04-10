import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './university-filters.module.css';
import { serviceContext } from '../../contexts/service-context';
import { useRequest } from '../../hooks';

import { MultipeSelect, SingleSelect, Checkbox } from '../common';
import ListInputs from '../list-of-checked-inputs';
import Spinner from '../spinner';

const UniversityFilters = ({ title, toggleFilter = () => {} }) => {
  const {
    getCities,
    getPrograms,
    getDisciplines,
    getFormsEducation,
    getLevelsOfPreparation,
    getTypesUniversity,
  } = useContext(serviceContext);

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
      <SingleSelect
        label="Город"
        data={cities}
        onChange={(city) => {
          toggleFilter({ city });
        }}
      />
      <MultipeSelect label="Направления подготовки" data={programs} />
      <ListInputs data={disciplines} label="Предметы" />
      <MultipeSelect label="Форма обучения" data={formsEducation} />
      <MultipeSelect label="Уровень подготовки" data={levelsOfPreparation} />
      <SingleSelect
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

UniversityFilters.propTypes = {
  title: PropTypes.string,
  addFilter: PropTypes.func,
};

export default UniversityFilters;
