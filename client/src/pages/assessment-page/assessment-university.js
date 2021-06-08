import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Checkbox, Input, TextArea } from '../../components/common';
import Spinner from '../../components/spinner';

import { useRequest } from '../../hooks';
import { serviceContext } from '../../contexts/service-context';
import styles from './assessment-page.module.css';

export const AssessmentUniversity = ({
  university,
  assessmentHandler,
  descriptionHandler,
}) => {
  const { getAllCategory } = useContext(serviceContext);
  const { data, isLoading } = useRequest([], getAllCategory);
  const [hasDescription, setHasDescription] = useState(false);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.assessment}>
      <h3 className={styles.subtitle}>
        Оцените {university.name} по шкале от 0 до 10:
      </h3>
      {!!data.length &&
        data.map((category) => {
          return (
            <div key={category._id} className={styles.category}>
              <div className={styles.category__title}>{category.name}</div>
              {category.criterions.map((criterion) => (
                <Input
                  key={criterion._id}
                  label={criterion.name}
                  type="number"
                  min="0"
                  max="10"
                  defaultValue="0"
                  onChange={({ target: { valueAsNumber } }) =>
                    assessmentHandler(valueAsNumber, criterion._id)
                  }
                />
              ))}
            </div>
          );
        })}
      <Checkbox
        label="Добавить примечание"
        onChange={({ target: { checked } }) => setHasDescription(checked)}
      />
      {hasDescription && (
        <TextArea
          label="Примечание"
          onChange={({ target: { value } }) => {
            descriptionHandler(value);
          }}
        />
      )}
    </div>
  );
};
