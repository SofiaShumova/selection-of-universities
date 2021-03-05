import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './input-file.module.css';

const InputFile = ({ label }) => {
  const [fileName, setFileName] = useState(null);

  const onChange = ({ target: { files } }) => {
    if (files.length) {
      setFileName(files[0].name);
    }
  };

  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}:</label>
      <div className={styles.wrapper}>
        <input className={styles.input} type="file" onChange={onChange} />
        <span className={styles.span}>{fileName}</span>
        <button className={styles.button}>Выберите файл</button>
      </div>
    </div>
  );
};

InputFile.propTypes = {
  label: PropTypes.string,
};

export default InputFile;
