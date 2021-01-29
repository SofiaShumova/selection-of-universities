import React from 'react';
import remove from '../../img/delete.png';
import edit from '../../img/pencil.png';

export const List = ({ items, deleteHandler, updateHandler }) => {
  if (!items.length) {
    return <span>Записей не найдено</span>;
  }

  return (
    <ul className="list">
      {items.map((item) => (
        <li className="item" key={item._id}>
          <div>
            <span className="item__name">{item.name}</span>
            <p className="item__description">
              {item.description || 'Описание отсутствует'}
            </p>
          </div>
          <div>
            <button
              className="item__button"
              onClick={() => {
                deleteHandler(item._id);
              }}
            >
              <img className="item__button-icon" src={remove} alt="remove" />
            </button>
            <button
              className="item__button"
              onClick={() => {
                updateHandler(item._id);
              }}
            >
              <img className="item__button-icon" src={edit} alt="edit" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
