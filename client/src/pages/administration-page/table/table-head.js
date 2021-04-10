import React from 'react';
import { v4 as uuid } from 'uuid';

export const TableHead = ({ schema }) => {
  return (
    <tr>
      {Object.entries(schema).map(([key, value]) => (
        <th key={uuid()}>{key}</th>
      ))}
    </tr>
  );
};
