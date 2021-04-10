import React, { useState } from 'react';
import Service from '../../services/api/service/service';
import { useRequest } from '../../hooks';
import styles from './administration-page.module.css';

import Table from './table';
import ModalForm from './modal-form';
import { Button } from '../../components/common';
import Spinner from '../../components/spinner';

const { getAllUniversity, getAllCity, getAllType } = new Service();

export const components = {
  singleSelect: 'SingleSelect',
  multipeSelect: 'MultipeSelect',
  input: 'Input',
  file: 'File',
  textarea: 'Textarea',
  checkbox: 'Checkbox',
};

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
  const toggleForm = () => setOpenForm(!openForm);
  return (
    <div>
      {openForm && (
        <div
          className={styles.shadow}
          onClick={({ target }) =>
            target.classList[0] === styles.shadow && toggleForm()
          }
        >
          <ModalForm onClose={toggleForm} schema={universitySchema} />
        </div>
      )}
      <nav className={styles.nav}>
        <h2>University</h2>
        <Button onClick={toggleForm}>Добавить запись</Button>
      </nav>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table data={data} schema={universitySchema} />
      )}
    </div>
  );
};

export default AdministrationPage;
