import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../common';
import UniversityCard from '../university-card';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import TestService from '../../service/TestService';
import { useRequest } from '../hooks';

const ListOfUniversities = ({ filters }) => {
  const { getUniversities } = new TestService();

  const { isLoading, isError, data, updateRequest } = useRequest(
    [],
    getUniversities
  );
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(getFilteredData(filters, data));
  }, [filters]);

  const getFilteredData = (filters, data) => {
    let result = [...data];

    Object.entries(filters).forEach(([key, value]) => {
      // result=result.filter(item=>item.key)
      // filter for id????????? for boolean
    });
    return data;
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Input placeholder="Поиск..." />
      {filteredData.map((university) => {
        return <UniversityCard key={university._id} university={university} />;
      })}
    </div>
  );
};

// ListOfUniversities.PropTypes = {
//   filters: PropTypes.shape({
//     cities:
//   }),
// };

export default ListOfUniversities;
