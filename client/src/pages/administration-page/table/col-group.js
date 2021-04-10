import React from 'react';

export const ColGroup = ({ schema }) => {
  const count = Object.keys(schema).length;

  return (
    <colgroup>
      {Object.keys(schema).map(() => (
        <col style={{ width: `${100 / count}%` }} />
      ))}
    </colgroup>
  );
};
