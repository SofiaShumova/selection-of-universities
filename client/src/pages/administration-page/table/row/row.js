import React from 'react';
import { v4 as uuid } from 'uuid';
import { Value } from '../value';

import trashImg from './trash.svg';
import editImg from './edit.svg';
import styles from './row.module.css';

const Row = ({ schema, item, onEdit, onRemove }) => {
  return (
    <tr className={styles.row}>
      {Object.entries(schema).map(([key, value]) => {
        return (
          <td className={styles.row__cell} key={uuid()}>
            <Value template={value} prop={key} item={item} />
          </td>
        );
      })}
      <div className={styles.row__actions}>
        <img
          className={styles.row__icon}
          src={editImg}
          onClick={onEdit}
          alt="edit"
        />

        <img
          className={styles.row__icon}
          src={trashImg}
          onClick={onRemove}
          alt="trash"
        />
      </div>
    </tr>
  );
};
export default Row;
