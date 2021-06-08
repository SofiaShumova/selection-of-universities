import React from 'react';

const styles = {
  fontWeight: 600,
  fontSize: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
};

const ErrorIndicator = ({ message = 'Что-то пошло не так ☹️' }) => {
  return <div style={styles}>{message}</div>;
};

export default ErrorIndicator;
