import React, { useState, useCallback, useEffect } from 'react';
import { ListItems } from './Entity/ListItems';
import useFetch from 'use-http';
import { LoaderDots } from '../components/Loader';
import { useMessage } from '../hooks/message.hook';

export const EntityPage = ({ title, route }) => {
  const [items, setItems] = useState([]);

  const { post, get, response, loading, cache, del } = useFetch(`/api${route}`);
  const { errorMessage, successMessage } = useMessage();

  const updateData = async () => {
    cache.clear();
    const fetched = await get('');
    if (response.ok) {
      setItems(fetched);
    } else {
      errorMessage('Ошибка загрузки!');
    }
  };

  const addItem = async ({ name, description }) => {
    await post({ name, description });

    if (response.ok) {
      successMessage(`Запись "${name}" успешно добавлена!`);
      updateData();
      return true;
    } else errorMessage('Ошибка добавления!');

    return false;
  };

  const updateItem = async ({ _id, name, description }) => {
    await post('/' + _id, { name, description });

    if (response.ok) {
      successMessage('Запись обновлена!');
      updateData();
    }
  };

  const deleteItem = async (id) => {
    await del('/' + id);

    if (response.ok) {
      successMessage('Запись удалена!');
      updateData();
    }
  };

  useEffect(async () => {
    updateData();
  }, [updateData]);

  return (
    <>
      <h1>{title}</h1>
      {loading && <LoaderDots />}
      {!loading && (
        <ListItems
          items={items}
          updateItem={updateItem}
          addItem={addItem}
          deleteItem={deleteItem}
          loading={loading}
        ></ListItems>
      )}
    </>
  );
};
