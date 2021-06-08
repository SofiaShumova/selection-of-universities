import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './university-filters.module.css';
import { serviceContext } from '../../contexts/service-context';
import { useRequest } from '../../hooks';

import { MultipeSelect, SingleSelect, Checkbox, Button } from '../common';
import ListInputs from '../list-of-checked-inputs';
import Spinner from '../spinner';

const UniversityFilters = ({ title, toggleFilter = () => {} }) => {
  const {
    getAllCity,
    getAllTrainingProgram,
    getAllDiscipline,
    getAllFormOfEducation,
    getAllLevelOfPreparation,
    getAllType,
  } = useContext(serviceContext);

  const { data: cities, isLoading: loadingCities } = useRequest([], getAllCity);
  const { data: programs, isLoading: loadingPrograms } = useRequest(
    [],
    getAllTrainingProgram
  );
  const { data: dataDisciplines, isLoading: loadingDisciplines } = useRequest(
    [],
    getAllDiscipline
  );
  const { data: formsEducation, isLoading: loadingFormsEducation } = useRequest(
    [],
    getAllFormOfEducation
  );
  const { data: levelsOfPreparation, isLoading: loadingLevelsOfPreparation } =
    useRequest([], getAllLevelOfPreparation);
  const { data: typesUniversity, isLoading: loadingTypesUniversity } =
    useRequest([], getAllType);

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
      <MultipeSelect
        label="Направления подготовки"
        data={programs}
        onChange={(trainingProgram) => {
          toggleFilter({ trainingProgram });
        }}
      />
      <ListInputs
        defaultValue={dataDisciplines.map((prop) => ({ prop }))}
        label="Предметы"
        onChange={(obj) => {
          toggleFilter(obj);
        }}
      />
      <MultipeSelect
        label="Форма обучения"
        data={formsEducation}
        onChange={(formOfEducation) => {
          toggleFilter({ formOfEducation });
        }}
      />
      <MultipeSelect
        label="Уровень подготовки"
        data={levelsOfPreparation}
        onChange={(levelOfPreparation) => {
          toggleFilter({ levelOfPreparation });
        }}
      />
      <SingleSelect
        label="Тип университета"
        data={typesUniversity}
        onChange={(type) => {
          toggleFilter({ type });
        }}
      />
      <Checkbox
        label="Общежитие"
        onChange={({ target }) => {
          toggleFilter({ dormitory: target.checked });
        }}
      />
      <Checkbox
        label="Бюджетные места"
        onChange={({ target }) => {
          toggleFilter({ count: target.checked });
        }}
      />
      <Checkbox
        label="Военная кафедра"
        onChange={({ target }) => {
          toggleFilter({ militaryDepartment: target.checked });
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
