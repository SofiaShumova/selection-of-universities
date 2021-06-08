import React, { useState } from 'react';
import { useRequest, useNotify } from '../../hooks';
import styles from './administration-page.module.css';

import Table from './table';
import ModalForm from './modal-form';
import { Button } from '../../components/common';
import Spinner from '../../components/spinner';

const AdministrationPage = ({ schema, title }) => {
  const { _getData, _addItem, _updateItem, _removeItem } = schema;
  const { data, isLoading, updateRequest } = useRequest([], _getData);
  const [openForm, setOpenForm] = useState(false);
  const [editableItem, setEditableItem] = useState(null);

  const { addSuccessNotify, addErrorNotify } = useNotify();
  const toggleForm = () => setOpenForm(!openForm);

  const onSave = async (item) => {
    try {
      let action = 'добавлена';

      if (editableItem) {
        action = 'обновлена';
        await _updateItem(item);
      } else {
        await _addItem(item);
      }

      setEditableItem(null);
      toggleForm();
      updateRequest();
      addSuccessNotify(`Запись успешно ${action}!`);
    } catch (e) {
      console.log(e);
      addErrorNotify('Ошибка операции!');
    }
  };
  const onRemove = async (item) => {
    _removeItem(item)
      .then(() => {
        updateRequest();
        addSuccessNotify('Запись успешно удалена!');
      })
      .catch(() => addErrorNotify('Ошибка удаления!'));
  };

  const changeItem = (item) => {
    setEditableItem(item);
    toggleForm();
  };
  const addNewItem = () => {
    setEditableItem(null);
    toggleForm();
  };

  if (openForm) {
    return (
      <ModalForm
        onClose={toggleForm}
        initialValue={editableItem}
        schema={schema}
        onSave={onSave}
      />
    );
  }

  return (
    <div>
      <nav className={styles.nav}>
        <h2>{title}</h2>
        <Button onClick={addNewItem}>Добавить запись</Button>
      </nav>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          data={data}
          changeItem={changeItem}
          removeItem={onRemove}
          schema={schema}
        />
      )}
    </div>
  );
};

export default AdministrationPage;

// update data in list
// toast
// npm init
// dotenv
