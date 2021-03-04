import React from 'react';
import { Input } from '../common';
import UniversityCard from '../university-card';

const ListOfUniversities = ({ data }) => {
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
