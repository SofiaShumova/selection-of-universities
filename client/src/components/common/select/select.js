import React, { Component, useState } from 'react';
import arrowIcon from './arrow-down-sign-to-navigate.png';
import cancelIcon from './cancel.png';
import styles from './select.module.css';
import data from '../../../test-data/select-list';

const SingleView = ({ item: { value, label } }) => {
  return (
    <span className={styles.selected_value} data-value={value}>
      {label}
    </span>
  );
};

const MultiplyView = ({ items, removeItem }) => {
  return (
    <div className={styles.preview_block__multiply}>
      {items &&
        items.map((i, index) => (
          <div key={index} className={styles.item_block}>
            <span className={styles.item_multiply}>{i.label}</span>
            <img
              className={styles.item_multiply__icon}
              src={cancelIcon}
              onClick={() => {
                removeItem(i);
              }}
              alt="cancel icon"
            />
          </div>
        ))}
    </div>
  );
};

const Select = ({ label, data, multiply }) => {
  const [selectedValue, setSelectedValue] = useState(multiply ? [] : data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const renderItems = (list) => {
    return list.map((item, index) => {
      return (
        <li
          className={`${styles.item} ${item.selected && styles.item_selected}`}
          data-value={item.value}
          key={index}
          onClick={() => {
            if (!multiply) {
              selectedValue.selected = false;
              setIsOpen(!isOpen);
            }

            item.selected = true;
            setSelectedValue(multiply ? [...selectedValue, item] : item);
          }}
        >
          {item.label}
        </li>
      );
    });
  };

  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <div className={styles.border_wrapper}>
        <input
          checked={isOpen}
          onChange={() => {
            setIsOpen(!isOpen);
          }}
          type="checkbox"
          name="open-list"
          className={styles.checkbox}
        />
        <div className={styles.preview_block}>
          {multiply ? (
            <MultiplyView
              items={selectedValue}
              removeItem={(item) => {
                item.selected = false;
                setSelectedValue(selectedValue.filter((v) => v !== item));
              }}
            />
          ) : (
            <SingleView item={selectedValue} />
          )}
          <img src={arrowIcon} alt="arrow icon" className={styles.icon} />
        </div>
        <ul className={styles.list}>{data && renderItems(data)}</ul>
      </div>
    </div>
  );
};

export default Select;
