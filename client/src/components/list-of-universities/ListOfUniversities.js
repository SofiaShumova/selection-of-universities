import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../common';
import UniversityCard from '../university-card';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { ServiceContext } from '../context';
import { useRequest } from '../hooks';
import { getFilteredData } from './getFilteredData';

const ListOfUniversities = ({ filters }) => {
  const { getUniversities } = useContext(ServiceContext);

  const { isLoading, isError, data, updateRequest } = useRequest(
    [],
    getUniversities
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Input placeholder="Поиск..." />
      {getFilteredData(filters, data).map((university) => {
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
