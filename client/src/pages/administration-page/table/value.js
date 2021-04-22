import React from 'react';

export const Value = ({ template, prop, item }) => {
  const { display: Component, key } = template;

  return (
    <Component>
      {(item?.[prop]?.[key] ?? item?.[prop] ?? 'null').toString()}
    </Component>
  );
};
