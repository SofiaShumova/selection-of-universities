import React from 'react';
import styles from './selectionPage.module.css';
import FiltresUniversity from '../../filtres-university/FiltresUniversity';

const StartPage = () => (
  <div className={styles.form}>
    <FiltresUniversity title="Фильтры для подбора" />
  </div>
);
export default StartPage;
