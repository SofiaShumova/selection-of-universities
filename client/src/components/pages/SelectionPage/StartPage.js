import React from 'react';
import styles from './selectionPage.module.css';
import UniversityFiltres from '../../university-filtres/UniversityFilters';

const StartPage = () => (
  <div className={styles.form}>
    <UniversityFiltres title="Фильтры для подбора" />
  </div>
);
export default StartPage;
