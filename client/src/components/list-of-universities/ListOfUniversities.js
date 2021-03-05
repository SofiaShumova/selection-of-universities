import React from 'react';
import PropTypes from 'prop-types';

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

ListOfUniversities.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfUniversities;
