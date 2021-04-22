import React, { useState } from 'react';
import Service from '../../services/api/service/service';
import { useRequest } from '../../hooks';
import styles from './administration-page.module.css';

import Table from './table';
import ModalForm from './modal-form';
import { Button } from '../../components/common';
import Spinner from '../../components/spinner';
import { components } from './components';

const {
  getAllUniversity,
  getAllCity,
  getAllType,
  addUniversity,
  updateUniversity,
  removeUniversity,
} = new Service();

const universitySchema = {
  _id: { display: 'span' },
  name: { display: 'span', input: components.input },
  description: { display: 'span', input: components.textarea },
  city: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllCity, displayKey: 'name', selectedKey: '_id' },
  },
  phone: { display: 'span', input: components.input },
  yearOfFoundation: { display: 'span', input: components.input },
  type: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllType, displayKey: 'name', selectedKey: '_id' },
  },
  militaryDepartment: { display: 'span', input: components.checkbox },
  dormitory: { display: 'span', input: components.checkbox },
  site: { display: 'span', input: components.input },
};

const AdministrationPage = () => {
  const { data, isLoading } = useRequest([], getAllUniversity);
  const [openForm, setOpenForm] = useState(false);
  const [editableItem, setEditableItem] = useState(null);
  const toggleForm = () => setOpenForm(!openForm);

  const onSave = async (item) => {
    if (editableItem) {
      setEditableItem(null);
      updateUniversity(item);
      toggleForm();
    } else {
      addUniversity(item);
      toggleForm();
    }
  };

  const changeItem = (item) => {
    setEditableItem(item);
    toggleForm();
  };
  const addItem = () => {
    setEditableItem(null);
    toggleForm();
  };
  const removeItem = async (item) => {
    removeUniversity(item);
  };

  if (openForm) {
    return (
      <ModalForm
        onClose={toggleForm}
        initialValue={editableItem}
        schema={universitySchema}
        onSave={onSave}
      />
    );
  }

  return (
    <div>
      <nav className={styles.nav}>
        <h2>University</h2>
        <Button onClick={addItem}>Добавить запись</Button>
      </nav>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          data={data}
          changeItem={changeItem}
          removeItem={removeItem}
          schema={universitySchema}
        />
      )}
    </div>
  );
};

export default AdministrationPage;

// update data in list
// delete item
// update item
// toast
