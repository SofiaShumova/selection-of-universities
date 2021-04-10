import React from 'react';
import Service from '../../services/api/service/service';
import { useRequest } from '../../hooks';

import Table from './table';
import { Button } from '../../components/common';

const { getAllUniversity } = new Service();

const schema = {
  _id: 'span',
  name: 'span',
  description: 'span',
  city: { key: 'name', element: 'span' },
  phone: 'span',
  yearOfFoundation: 'span',
  type: { key: 'name', element: 'span' },
  militaryDepartment: 'span',
  dormitory: 'span',
  site: 'span',
};

const AdministrationPage = () => {
  const { data } = useRequest([], getAllUniversity);
  return (
    <div>
      <nav>
        <h2>University</h2>
        <Button>add</Button>
      </nav>
      {data.length && <Table data={data} schema={schema} />}
    </div>
  );
};

export default AdministrationPage;
