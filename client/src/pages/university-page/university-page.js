import React from 'react';
import { useParams } from 'react-router-dom';

const UniversityPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default UniversityPage;
