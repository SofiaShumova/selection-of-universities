import React, { useState } from 'react';
import PropTypes from 'prop-types';

import arrowIcon from './arrow-down-sign-to-navigate.png';
import cancelIcon from './cancel.png';
import styles from './select.module.css';

const MultiplePreview = ({ items, removeItem }) => {
  return (
    <div className={styles.preview_block__multiply}>
      {items &&
        items.map((item) => (
          <div key={item._id} className={styles.item_block}>
            <span className={styles.item_multiply}>{item.name}</span>
            <img
              className={styles.item_multiply__icon}
              src={cancelIcon}
              onClick={() => {
                removeItem(item);
              }}
              alt="cancel icon"
            />
          </div>
        ))}
    </div>
  );
};

const TemplateSelect = ({ label, preview, list }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <div className={styles.border_wrapper}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.preview_block}>
          {preview}
          <img src={arrowIcon} alt="arrow icon" className={styles.icon} />
        </div>
        {list}
      </div>
    </div>
  );
};

const MultipeSelect = ({
  label,
  data,
  onChange = () => {},
  initialValue = [],
}) => {
  const [value, setValue] = useState(initialValue);

  const getData = () => {
    if (!value.length) {
      return data;
    }

    const itemsId = value.map((item) => item._id);
    return data.filter((item) => !itemsId.includes(item._id));
  };

  const removeItem = ({ _id }) => {
    setValue((prev) => prev.filter((item) => item._id !== _id));
  };
  return (
    <TemplateSelect
      label={label}
      preview={
        value && <MultiplePreview items={value} removeItem={removeItem} />
      }
      list={
        data.length && (
          <List
            data={getData()}
            onSelect={(item) => {
              setValue((prev) => prev.concat(item));
              onChange(value);
            }}
          />
        )
      }
    />
  );
};

const SingleSelect = ({
  label,
  data,
  onChange = () => {},
  initialValue = null,
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <TemplateSelect
      label={label}
      preview={
        value && <span className={styles.selected_value}>{value.name}</span>
      }
      list={
        data.length && (
          <List
            data={value ? data.filter((item) => item._id !== value._id) : data}
            onSelect={(item) => {
              setValue(item);
              onChange(item);
            }}
          />
        )
      }
    />
  );
};

const List = ({ data, onSelect }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li
          key={item._id}
          className={styles.item}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export { SingleSelect, MultipeSelect };
