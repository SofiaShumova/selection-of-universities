import React, { useState, useEffect } from 'react';
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

const List = ({ data, onSelect }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li
          key={item._id}
          className={styles.item}
          onClick={() => {
            onSelect(item);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const TemplateSelect = ({ label, preview, list, ...props }) => {
  const [visibleList, setVisibleList] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisibleList(true)}
      onMouseLeave={() => setVisibleList(false)}
      className={styles.box}
    >
      <label className={styles.label}>{label}:</label>
      <div className={styles.border_wrapper}>
        <div className={styles.preview_block}>
          {preview}
          <img
            onBlur={() => console.log('blur')}
            onClick={() => {
              setVisibleList((prev) => !prev);
            }}
            src={arrowIcon}
            alt="arrow icon"
            className={`${styles.icon} ${
              visibleList ? styles.icon_rotate : ''
            }`}
          />
        </div>
        {visibleList && list}
      </div>
    </div>
  );
};

const MultipeSelect = ({
  label,
  data,
  onChange = () => {},
  defaultValue = [],
  ...props
}) => {
  const [value, setValue] = useState(defaultValue?.length ? defaultValue : []);
  const [avalibleData, setAvalibleData] = useState([]);

  useEffect(() => {
    setAvalibleData(getData());
    onChange(value);
  }, [value, data]);

  const getData = () => {
    if (!value?.length) {
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
        !!avalibleData.length && (
          <List
            data={avalibleData}
            onSelect={(item) => setValue((prev) => prev.concat(item))}
          />
        )
      }
      {...props}
    />
  );
};

const SingleSelect = ({
  label,
  data,
  onChange = () => {},
  defaultValue = null,
}) => {
  const [value, setValue] = useState(defaultValue);

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

export { SingleSelect, MultipeSelect };

// TODO: если 0 эелемнтов для выбора закрывать селект

MultipeSelect.propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
};

SingleSelect.propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  defaultValue: PropTypes.object,
};
