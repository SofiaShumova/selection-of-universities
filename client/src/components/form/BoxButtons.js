import React from 'react';

const buttons = [
  {
    title: 'Добавить',
    onClick: {},
    type: 'submit',
  },
];

export const BoxButtons = ({ buttons }) => {
  return (
    <div className="modal__boxButtons">
      {buttons.map((btn, index) => {
        return (
          <button
            key={index}
            type={btn.type || ''}
            className="modal__button"
            onClick={btn.onClick || null}
          >
            {btn.title}
          </button>
        );
      })}
    </div>
  );
};
