import React from 'react';
import Area from '../../components/area/Area';
import Checkbox from '../../components/common/checkbox/checkbox';
import Input from '../../components/common/input';
import Select from '../../components/common/select';
import ListInputs from '../../components/list-of-checked-inputs/ListInputs';
import styles from './main.module.css';

const cities = [
  { value: '1', label: 'Рязань' },
  { value: '2', label: 'Москва' },
];
const programs = [
  { value: '1', label: 'Радиотехника' },
  { value: '2', label: 'Прикладная информатика' },
];
const disciplines = [
  { label: 'Русский язык' },
  { label: 'Математика' },
  { label: 'География' },
  { label: 'Биология' },
  { label: 'Физика' },
  { label: 'Информатика' },
  { label: 'Химия' },
];
const levelOfPreparation = [
  { label: 'Бакалавриат' },
  { label: 'Специалитет' },
  { label: 'Магистратура' },
  { label: 'Аспирантура' },
];
const formEducation = [
  { label: 'Очная' },
  { label: 'Заочная' },
  { label: 'Дистанционная' },
  { label: 'Очно-заочная' },
];

const typeUniversity = [
  { label: 'Государственный' },
  { label: 'Негосударственный' },
];

const MainPage = () => {
  const leftCol = (
    <div className={styles.left_wrapper}>
      <Input placeholder="Поиск..." />
    </div>
  );

  const rightCol = (
    <div className={styles.right_wrapper}>
      <h2 className={styles.title}>Фильтры</h2>
      <Select label="Город" data={cities} />
      <Select label="Направления подготовки" data={programs} multiply={true} />
      <ListInputs data={disciplines} label="Предметы" />
      <Select label="Форма обучения" data={formEducation} multiply={true} />
      <Select
        label="Уровень подготовки"
        data={levelOfPreparation}
        multiply={true}
      />
      <Select label="Тип университета" data={typeUniversity} />
      <Checkbox label="Общежитие" />
      <Checkbox label="Бюджетные места" />
      <Checkbox label="Военная кафедра" />
    </div>
  );
  return (
    <div className={styles.wrapper}>
      <Area left={leftCol} right={rightCol} />
    </div>
  );
};

export default MainPage;
