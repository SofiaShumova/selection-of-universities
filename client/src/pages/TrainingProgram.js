import React, { useState, useEffect, useCallback } from 'react';
import useFetch from 'use-http';
import Modal from 'react-modal';
import { useMessage } from '../hooks/message.hook';

import { Box } from '../components/form/Box';
import { BoxButtons } from '../components/form/BoxButtons';
import { LoaderDots } from '../components/Loader';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { fields, buttons } from './TrainingProgram/modal/fields';
import { ModalCreateProgram } from './TrainingProgram/modal/ModalCreateProgram';
import { Program } from './TrainingProgram/Program';

export const TrainingProgram = ({}) => {
  const [createState, setCreateState] = useState(false);
  const [professions, setProfessions] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);

  const { post, get, response, loading, cache, del } = useFetch(
    `/api/training-program`
  );

  const { errorMessage, successMessage } = useMessage();

  const {
    get: getProfession,
    response: responseProfession,
    loading: loadingProfession,
    cache: cacheProfession,
  } = useFetch(`/api/profession`);

  const updateData = useCallback(async () => {
    cache.clear();
    const fetched = await get('');
    if (response.ok) {
      setPrograms(fetched);
    } else {
      errorMessage('Ошибка загрузки!');
    }
  }, []);

  const addItem = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      professions: selectedProfessions.map((p) => p.value),
    };
    await post(data);

    if (response.ok) {
      successMessage(`Запись "${data.name}" успешно добавлена!`);
      setCreateState(false);
      updateData();
      return true;
    } else errorMessage('Ошибка добавления!');
  };
  const openModalCreate = async () => {
    cacheProfession.clear();
    const listProfessions = await getProfession();

    if (responseProfession.ok) {
      setProfessions(
        listProfessions.map((profession) => {
          return { value: profession._id, label: profession.name };
        })
      );
    } else {
      errorMessage('Ошибка загрузки дополнительных данных!');
    }
    setCreateState(true);
  };
  useEffect(async () => {
    updateData();
  }, [updateData]);

  return (
    <>
      {(loading || loadingProfession) && <LoaderDots />}
      {!(loading || loadingProfession) && (
        <>
          <ModalCreateProgram
            state={createState}
            setState={setCreateState}
            handler={addItem}
            fields={fields}
            buttons={buttons}
            professions={professions}
            setSelectedProfessions={setSelectedProfessions}
          />
          <h1>Направления подготовки</h1>
          <button className="modal__button" onClick={openModalCreate}>
            Добавить
          </button>
          <ul className="list">
            {programs.map((program, index) => (
              <Program key={index} item={program} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
