import React from 'react';
import { ColGroup } from './col-group';
import Row from './row';
import { TableHead } from './table-head';
import styles from './table.module.css';

export const Table = ({ data, schema, changeItem, removeItem }) => {
  return (
    <table className={styles.table}>
      <ColGroup schema={schema} />
      <thead className={styles.thead}>
        <TableHead schema={schema} />
      </thead>
      <tbody className={styles.tbody}>
        {data.map((item) => (
          <Row
            key={item._id}
            onEdit={() => changeItem(item)}
            onRemove={() => removeItem(item)}
            schema={schema}
            item={item}
          />
        ))}
      </tbody>
    </table>
  );
};
