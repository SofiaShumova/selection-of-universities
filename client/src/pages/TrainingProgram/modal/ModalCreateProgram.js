import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Modal from 'react-modal';

import { Box } from '../../../components/form/Box';
import { BoxButtons } from '../../../components/form/BoxButtons';

export const ModalCreateProgram = ({
  state,
  setState,
  handler,
  fields,
  buttons,
  professions,
  setSelectedProfessions,
}) => {
  const style = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
    placeholder: () => ({
      color: 'rgba(0,0,0,0.7)',
    }),
    control: (base, state) => ({
      ...base,
      borderColor: 'black',
    }),
  };

  return (
    <Modal
      className="modal"
      isOpen={state}
      ariaHideApp={false}
      onRequestClose={() => setState(false)}
    >
      <h1>Добавление направления подготовки</h1>
      <form onSubmit={handler}>
        {fields.map((f, index) => (
          <Box key={index} options={f} />
        ))}

        <div className="modal__box">
          <label className="modal__label"> Профессии: </label>
          <Select
            placeholder={'Выбрать...'}
            styles={style}
            className="modal__select"
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={professions}
            onChange={setSelectedProfessions}
          />
        </div>

        <BoxButtons
          buttons={buttons.map((btn) => {
            if (btn.type === 'reset') btn.onClick = () => setState(false);
            return btn;
          })}
        />
      </form>
    </Modal>
  );
};
