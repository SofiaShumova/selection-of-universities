import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './modal-form.module.css';
import closeIcon from './close.svg';
import { Button } from '../../../components/common';
import Field from './field';

const ModalForm = ({ onClose, schema, initialValue, onSave = () => {} }) => {
  const item = initialValue ?? {};

  return (
    <div
      className={styles.shadow}
      onClick={({ target: { classList } }) =>
        classList[0] === styles.shadow && onClose()
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={onClose}>
          <img
            className={styles.close__icon}
            src={closeIcon}
            alt="close icon"
          />
        </div>
        <h3 className={styles.title}>{`${
          initialValue ? 'Изменение' : 'Добавление новой'
        } записи`}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(item);
          }}
        >
          {Object.entries(schema).map((data) => (
            <Field key={uuid()} data={data} targetData={item} />
          ))}
          <div className="">
            <Button type="submit" text="send" />
            <Button type="reset" text="reset" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
