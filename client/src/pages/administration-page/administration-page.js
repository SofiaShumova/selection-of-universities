import React, { useState } from 'react';
import { useRequest } from '../../hooks';
import styles from './administration-page.module.css';

import Table from './table';
import ModalForm from './modal-form';
import { Button } from '../../components/common';
import Spinner from '../../components/spinner';

const AdministrationPage = ({ schema }) => {
  const { _getData, _addItem, _updateItem, _removeItem } = schema;
  const { data, isLoading } = useRequest([], _getData);
  const [openForm, setOpenForm] = useState(false);
  const [editableItem, setEditableItem] = useState(null);
  const toggleForm = () => setOpenForm(!openForm);

  const onSave = async (item) => {
    if (editableItem) {
      setEditableItem(null);
      _updateItem(item);
      toggleForm();
    } else {
      _addItem(item);
      toggleForm();
    }
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
        <h2>University</h2>
        <Button onClick={addNewItem}>Добавить запись</Button>
      </nav>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          data={data}
          changeItem={changeItem}
          removeItem={_removeItem}
          schema={schema}
        />
      )}
    </div>
  );
};

export default AdministrationPage;

// update data in list
// toast
