import React from 'react';
import { v4 as uuid } from 'uuid';
import { getComponent } from './get-component';
import { useRequest } from '../../../hooks';

import styles from './modal-form.module.css';
import closeIcon from './close.svg';
import { Button } from '../../../components/common';

const ElementForm = ({ prop, template: { input } }) => {
  const Component = getComponent(input);
  return (
    <div className={styles.box}>
      <Component label={prop} />
    </div>
  );
};
//,
const ElementFormWithData = ({
  prop,
  template: {
    input,
    data: { promise, displayKey, selectedKey },
  },
}) => {
  const Component = getComponent(input);
  const { data } = useRequest([], promise);
  return (
    <div className={styles.box}>
      <Component data={data} label={prop} />
    </div>
  );
};

const ModalForm = ({
  onClose,
  schema,
  isNewItem = true,
  onSave = () => {},
}) => {
  const handlerForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={onClose}>
        <img className={styles.close__icon} src={closeIcon} alt="close icon" />
      </div>
      <h3 className={styles.title}>{`${
        isNewItem ? 'Добавление новой' : 'Изменение'
      } записи`}</h3>
      <form onSubmit={handlerForm}>
        {Object.entries(schema).map(([key, { input, data }]) =>
          input ? (
            data ? (
              <ElementFormWithData
                key={uuid()}
                prop={key}
                template={{ input, data }}
              />
            ) : (
              <ElementForm key={uuid()} prop={key} template={{ input }} />
            )
          ) : (
            ''
          )
        )}
        <div className="">
          <Button type="submit" text="send" />
          <Button type="reset" text="reset" />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
