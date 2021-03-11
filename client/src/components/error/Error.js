import React from 'react';

const Error = ({ message = 'Ошибка загрузки!' }) => {
  return <div>{message}</div>;
};

export default Error;
