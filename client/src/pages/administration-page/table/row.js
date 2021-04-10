import React from 'react';
import { v4 as uuid } from 'uuid';
import { Value } from './value';

export const Row = ({ schema, item }) => {
  return (
    <tr>
      {Object.entries(schema).map(([key, value]) => {
        return (
          <td key={uuid()}>
            <Value
              component={value.display}
              prop={value.key ?? key}
              item={item}
            />
          </td>
        );
      })}
    </tr>
  );
};
