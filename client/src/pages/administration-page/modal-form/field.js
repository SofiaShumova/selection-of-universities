import React from 'react';
import { components } from '../components';
import { getComponent } from './get-component';
import { useRequest } from '../../../hooks';
import styles from './modal-form.module.css';

const ElementForm = ({ template: { input, prop }, handler, initialValue }) => {
  const Component = getComponent(input);

  return (
    <div className={styles.box}>
      <Component
        defaultValue={initialValue ?? ''}
        name={prop}
        onChange={({ target }) => {
          handler(
            input === components.checkbox ? target.checked : target.value
          );
        }}
        label={prop}
      />
    </div>
  );
};

const ElementFormWithData = ({
  handler,
  initialValue,
  template: {
    input,
    prop,
    data: { promise },
  },
}) => {
  const Component = getComponent(input);
  const { data } = useRequest([], promise);

  return (
    <div className={styles.box}>
      <Component
        data={data}
        defaultValue={initialValue}
        label={prop}
        onChange={handler}
      />
    </div>
  );
};

const Field = ({
  data: [key, { input, data, CustomComponent }],
  targetData,
}) => {
  if (CustomComponent) {
    return (
      <CustomComponent
        initialValue={targetData[key]}
        prop={key}
        data={data}
        targetData={targetData}
      />
    );
  }
  return input ? (
    data ? (
      <ElementFormWithData
        initialValue={targetData[key]}
        template={{ input, data, prop: key }}
        handler={(value) =>
          (targetData[key] = Array.isArray(value) ? value : value?._id)
        }
      />
    ) : (
      <ElementForm
        initialValue={targetData[key]}
        template={{ input, prop: key }}
        handler={(value) => (targetData[key] = value)}
      />
    )
  ) : (
    ''
  );
};

export default Field;
