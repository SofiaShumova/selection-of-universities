import React, { useContext } from 'react';
import { SingleSelect } from '../../components/common';
import Spinner from '../../components/spinner';
import { useRequest } from '../../hooks';
import { serviceContext } from '../../contexts/service-context';

export const SelectUniversity = ({ handler = () => {} }) => {
  const { getAvailableUniversity } = useContext(serviceContext);
  const { data, isLoading } = useRequest([], getAvailableUniversity);

  if (isLoading) return <Spinner />;

  return data?.length ? (
    <SingleSelect
      label="Выберите ВУЗ для оценки"
      data={data}
      onChange={handler}
    />
  ) : (
    <div>Нет доступных ВУЗов для оценки!</div>
  );
};
