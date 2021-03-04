import React, { useState } from 'react';
import arrowIcon from './arrow-down-sign-to-navigate.png';
import cancelIcon from './cancel.png';
import styles from './select.module.css';

const SingleSelect = ({ item: { name } }) => {
  return <span className={styles.selected_value}>{name}</span>;
};

const MultiSelect = ({ items, removeItem }) => {
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

const Select = ({ label, data, multiply }) => {
  const [selectedValue, setSelectedValue] = useState(multiply ? [] : null);
  const [isOpen, setIsOpen] = useState(false);

  const selectItem = (item) => {
    if (multiply) {
      setSelectedValue([...selectedValue, item]);
      item.selected = true;
    } else {
      if (selectedValue) selectedValue.selected = false;
      item.selected = true;
      setSelectedValue(item);
      setIsOpen(!isOpen);
    }
  };

  const removeItem = (item) => {
    if (multiply) {
      item.selected = false;
      setSelectedValue(selectedValue.filter((value) => value._id !== item._id));
    }
  };

  const renderItems = (list) => {
    return list.map((item) => {
      const classes = `${styles.item} ${
        item.selected ? styles.item_selected : ''
      }`;

      return (
        <li key={item._id} className={classes} onClick={() => selectItem(item)}>
          {item.name}
        </li>
      );
    });
  };

  const preview = multiply ? (
    <MultiSelect items={selectedValue} removeItem={removeItem} />
  ) : (
    <SingleSelect item={selectedValue} />
  );

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
          className={styles.checkbox}
        />
        <div className={styles.preview_block}>
          {selectedValue && preview}
          <img src={arrowIcon} alt="arrow icon" className={styles.icon} />
        </div>
        {data.length && <ul className={styles.list}>{renderItems(data)}</ul>}
      </div>
    </div>
  );
};

export default Select;

// TODO: warning key prop in MultiSelect and select ?!?!?!?!?
