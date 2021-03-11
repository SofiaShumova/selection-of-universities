import React from 'react';

import { Input } from '../common';
import UniversityCard from '../university-card';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import TestService from '../../service/TestService';
import { useRequest } from '../hooks';

const ListOfUniversities = () => {
  const { getUniversities } = new TestService();

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
      {data.map((university) => {
        return <UniversityCard key={university._id} university={university} />;
      })}
    </div>
  );
};

export default ListOfUniversities;
