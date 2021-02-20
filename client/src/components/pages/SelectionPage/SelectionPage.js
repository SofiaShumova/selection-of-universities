import React from 'react';
import styles from './selectionPage.module.css';
import TestService from '../../../service/testService';
import Select from '../../common/select';
import ListInputs from '../../list-of-checked-inputs';
import Checkbox from '../../common/checkbox';
import FiltresUniversity from '../../filtres-university/FiltresUniversity';
import Button from '../../common/button';

const SelectionPage = () => {
  return (
    <form className={styles.form}>
      <FiltresUniversity title="Фильтры для подбора" />
      <Button className={styles.button} text="Далее" type="submit" />
    </form>
  );
};

export default SelectionPage;
