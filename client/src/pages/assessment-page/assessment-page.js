import React, { useState, useContext } from 'react';

import { Button } from '../../components/common';
import { SelectUniversity } from './select-university';
import { AssessmentUniversity } from './assessment-university';

import { useNotify } from '../../hooks';
import { serviceContext } from '../../contexts/service-context';
import { userContext } from '../../contexts/auth-context';

import styles from './assessment-page.module.css';

const AssessmentPage = () => {
  const [university, setUniversity] = useState(null);
  const [description, setDescription] = useState('');
  const [result, setResult] = useState({});

  const { addExpertReview } = useContext(serviceContext);
  const user = useContext(userContext);

  const { addSuccessNotify, addErrorNotify } = useNotify();

  const assessmentHandler = (value, criterion) => {
    setResult((prev) => ({ ...prev, [criterion]: value }));
  };

  const isValidResult = () => {
    return !Object.values(result).some((value) => value < 0 || value > 10);
  };

  const handler = async () => {
    if (!isValidResult) {
      return addErrorNotify(
        'Проверьте корректность оценок! Значение оценки должно быть не более 10 и не менее 0!'
      );
    }

    try {
      const finishedResult = Object.entries(result).reduce(
        (acc, [key, value]) => acc.concat({ criterion: key, score: value }),
        []
      );
      // console.log();
      await addExpertReview({
        expert: user._id,
        university,
        description,
        result: finishedResult,
      });
      addSuccessNotify('Оценка успешно сохранена!');
      setUniversity(null);
      setDescription('');
      setResult({});
    } catch (error) {
      addErrorNotify(`При добавлении произошла ошибка! ${error?.message}`);
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Оценка ВУЗа</h2>
      <SelectUniversity handler={setUniversity} />
      {university && (
        <AssessmentUniversity
          university={university}
          assessmentHandler={assessmentHandler}
          descriptionHandler={setDescription}
        />
      )}
      {university && (
        <Button
          className={styles.button}
          text="Сохранить оценку"
          onClick={handler}
        />
      )}
    </div>
  );
};

export default AssessmentPage;
