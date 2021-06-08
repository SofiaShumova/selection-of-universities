import React from 'react';
import { v4 as uuid } from 'uuid';

export const ColGroup = ({ schema }) => {
  const count = Object.keys(schema).length;

  return (
    <colgroup>
      {Object.keys(schema).map(() => (
        <col key={uuid()} style={{ width: `${100 / count}%` }} />
      ))}
    </colgroup>
  );
};
