import React, { Component } from 'react';
import styles from './university-card.module.css';

export default class UniversityCard extends Component {
  render() {
    const {
      university: { id, image, description, name },
    } = this.props;

    return (
      <a className={styles.link} href={`/${id}`}>
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
  }
}
