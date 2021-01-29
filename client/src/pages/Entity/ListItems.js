import React, { useCallback, useEffect, useState } from 'react';
import { List } from './List';
import { ModalEditItem } from './modal/ModalEditItem';
import { ModalDeleteItem } from './modal/ModalDeleteItem';
import { ModalCreateItem } from './modal/ModalCreateItem';
import { LoaderDots } from '../../components/Loader';
import '../../styles/list.css';

const fields = [
  {
    title: 'Название',
    type: 'text',
    element: 'input',
    name: 'name',
    required: true,
  },
  {
    title: 'Описание',
    type: 'text',
    element: 'textarea',
    name: 'description',
    required: false,
  },
];

const buttons = [
  { title: 'Сохранить изменения', type: 'submit' },
  {
    title: 'Отменить',
    type: 'reset',
  },
];

export const ListItems = ({
  items,
  updateItem,
  addItem,
  deleteItem,
  loading,
}) => {
  const [updateState, setUpdateState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [createState, setCreateState] = useState(false);

  const [editingItem, setEditingItem] = useState({});

  const openModalDeleting = (id) => {
    setDeleteState(true);
    setEditingItem(items.filter((d) => d._id === id)[0]);
  };

  const openModalEditing = (id) => {
    setUpdateState(true);
    setEditingItem(items.filter((d) => d._id === id)[0]);
  };

  const openModalCreate = () => {
    setCreateState(true);
  };

  return (
    <div className="wrapper">
      {loading && <LoaderDots />}
      {!loading && (
        <>
          <ModalCreateItem
            setModalState={setCreateState}
            modalState={createState}
            handler={addItem}
            fields={fields}
            buttons={buttons}
          ></ModalCreateItem>
          <ModalEditItem
            setModalState={setUpdateState}
            modalState={updateState}
            item={editingItem}
            handler={updateItem}
            fields={fields}
            buttons={buttons}
          ></ModalEditItem>
          <ModalDeleteItem
            setModalState={setDeleteState}
            modalState={deleteState}
            item={editingItem}
            handler={deleteItem}
          ></ModalDeleteItem>
          <button className="modal__button" onClick={openModalCreate}>
            Добавить
          </button>
          <List
            updateHandler={openModalEditing}
            deleteHandler={openModalDeleting}
            items={items}
          ></List>
        </>
      )}
    </div>
  );
};

// DONE: loader
// DONE: delete
// DONE: update
// DONE: styles for list
// DONE: modal window for editing
