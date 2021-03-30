import React from 'react';
import { Link } from 'react-router-dom';
import styles from './registerPage.module.css';
import Input from '../../components/common/input';
import Button from '../../components/common/button';

const RegisterPage = () => {
  return (
    <div>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            login: e.target.login.value,
            password: e.target.password.value,
            code: e.target.code.value,
            name: e.target.name.value,
          };
          console.log(data);
          // e.target.reset();
        }}
      >
        <h1 className={styles.title}>Регистрация</h1>
        <Input label="Имя" name="name" />
        <Input label="E-mail" name="login" />
        <Input label="Кодовое слово" name="code" />
        <Input label="Пароль" type="password" name="password" />
        <Button type="submit" className={styles.button} text="Войти" />
      </form>
      <Link className={styles.link} to="/login">
        Вход
      </Link>
    </div>
  );
};

export default RegisterPage;
