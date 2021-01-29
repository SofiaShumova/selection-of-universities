import React from 'react';
import remove from '../../img/delete.png';
import edit from '../../img/pencil.png';

export const Program = ({ item }) => {
  return (
    <li className="item">
      <div>
        <span className="item__name">{item.name}</span>
        <p className="item__description">
          {item.description || 'Описание отсутствует'}
          <br />
          {item.professions.length &&
            item.professions.map((profession) => (
              <span key={profession._id}>{profession.name}, </span>
            ))}
        </p>
      </div>
      <div>
        <button
          className="item__button"
          //   onClick={() => {
          //     deleteHandler(item._id);
          //   }}
        >
          <img className="item__button-icon" src={remove} alt="remove" />
        </button>
        <button
          className="item__button"
          //   onClick={() => {
          //     updateHandler(item._id);
          //   }}
        >
          <img className="item__button-icon" src={edit} alt="edit" />
        </button>
      </div>
    </li>
  );
};
