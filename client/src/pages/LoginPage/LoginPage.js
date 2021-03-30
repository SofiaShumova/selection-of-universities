import React from 'react';
import { Input, Button } from '../../components/common';
import styles from './loginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            login: e.target.login.value,
            password: e.target.password.value,
          };
          console.log(data);
          // e.target.reset();
        }}
      >
        <h1 className={styles.title}>Вход</h1>
        <Input label="E-mail" name="login" />
        <Input label="Пароль" type="password" name="password" />
        <Button type="submit" className={styles.button} text="Войти" />
      </form>
      <Link className={styles.link} to="/register">
        Регистрация
      </Link>
    </div>
  );
};

export default LoginPage;
