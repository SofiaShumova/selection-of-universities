import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../common';
import UniversityCard from '../university-card';

import Spinner from '../spinner';
import ErrorIndicator from '../common/error-indicator';

import { serviceContext } from '../../contexts/service-context';
import { useRequest } from '../../hooks';
import { getFilteredData } from '../../services/analysis/get-filtered-data';

import styles from './list-of-universities.module.css';

const ListOfUniversities = ({ filters }) => {
  const { getAllUniversity, getAllRequirements } = useContext(serviceContext);

  const { isLoading, isError, data } = useRequest([], getAllUniversity);
  const { isLoading: isLoadingRequirements, data: requirements } = useRequest(
    [],
    getAllRequirements
  );

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (data.length && requirements.length) {
      setUniversities(
        getFilteredData(filters, data, requirements).map((university) => {
          return (
            <UniversityCard key={university._id} university={university} />
          );
        })
      );
    }
  }, [filters, data, requirements]);

  if (isLoading || isLoadingRequirements) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Input placeholder="Поиск..." />
      {universities.length ? (
        universities
      ) : (
        <div className={styles.message}>
          По указанным параметрам ВУЗы не найдены ☹️
        </div>
      )}
    </div>
  );
};
ListOfUniversities.propTypes = { filters: PropTypes.object };
export default ListOfUniversities;
