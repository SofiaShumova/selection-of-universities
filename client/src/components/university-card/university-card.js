import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './university-card.module.css';

const UniversityCard = ({ university }) => {
  const { _id, image, description, name } = university;
  return (
    <a className={styles.link} href={`/university/${_id}`}>
      <div className={styles.card}>
        {image && <img className={styles.image} src={image} alt={name} />}
        <div className={styles.block}>
          <span className={styles.name}>{name}</span>
          <div className={styles.wrapper}>
            <div className={styles.descBlock}>
              <p className={styles.desc}>{description}</p>
              <div className={''}>
                {Object.entries(university).map(([key, value]) => (
                  <div key={uuid()}>{formatText(key, value)}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

UniversityCard.propTypes = {
  university: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default UniversityCard;

function formatText(key, value) {
  const exclude = ['_id', 'description', '__v', 'name'];

  const words = {
    city: 'Город',
    type: 'Тип',
    phone: 'Номер телефона',
    site: 'Сайт',
    dormitory: 'Общежитие',
    militaryDepartment: 'Военная кафедра',
    yearOfFoundation: 'Год основания',
  };
  value = typeof value === 'boolean' ? (value ? 'да' : 'нет') : value;
  value = value?.name || value;
  return exclude.includes(key) ? '' : `${words?.[key] || key} : ${value}`;
}
