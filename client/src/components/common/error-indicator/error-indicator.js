import React from 'react';

const ErrorIndicator = ({ message = 'Что-то пошло не так' }) => {
  return <div>{message}</div>;
};

export default ErrorIndicator;
