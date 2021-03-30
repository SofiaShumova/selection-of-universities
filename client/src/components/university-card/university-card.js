import React from 'react';
import PropTypes from 'prop-types';
import styles from './university-card.module.css';

const UniversityCard = ({ university: { _id, image, description, name } }) => {
  return (
    <a className={styles.link} href={`/${_id}`}>
      <div className={styles.card}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.block}>
          <span className={styles.name}>{name}</span>
          <div className={styles.wrapper}>
            <div className={styles.descBlock}>
              <p className={styles.desc}>{description}</p>
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
