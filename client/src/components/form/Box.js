import React from 'react';

const fields = {
  title: ' Название',
  type: 'text',
  element: 'input',
  name: 'name',
  defaultValue: '',
  required: true,
};

export const Box = ({ options }) => {
  return (
    <div className="modal__box">
      <label className="modal__label">{options.title}:</label>
      {options.element === 'input' && (
        <input
          className="modal__input"
          defaultValue={options.defaultValue || ''}
          required={options.required || false}
          name={options.name}
          type={options.type || 'text'}
        />
      )}
      {options.element === 'textarea' && (
        <textarea
          className="modal__input"
          defaultValue={options.defaultValue || ''}
          required={options.required || false}
          name={options.name}
          type={options.type || 'text'}
          rows="10"
        />
      )}
    </div>
  );
};
