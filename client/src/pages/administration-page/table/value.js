import React from 'react';

export const Value = ({ component: Component, prop, item }) => {
  return <Component>{item[prop] ?? 'null'}</Component>;
};
