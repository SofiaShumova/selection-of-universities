import React from 'react';

export const Value = ({ template, prop, item }) => {
  const { display: Component, key, formatDisplay = (str) => str } = template;
  const value = formatDisplay(item?.[prop]?.[key] ?? item?.[prop] ?? 'null');

  return (
    <Component>
      {Array.isArray(value)
        ? value.map((item) => item?.name).join(', ')
        : value.toString()}
    </Component>
  );
};
