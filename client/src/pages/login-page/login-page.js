import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Input, Button } from '../../components/common';
import { authContext } from '../../contexts/auth-context';
import { useNotify } from '../../hooks';

import styles from './login-page.module.css';

const LoginPage = () => {
  const { login } = useContext(authContext);
  const { addErrorNotify, addSuccessNotify } = useNotify();
  const history = useHistory();

  const handler = async (e) => {
    e.preventDefault();
    try {
      await login({
        login: e.target.login.value,
        password: e.target.password.value,
      });
      history.push('/profile');
      // history.go(0);
      addSuccessNotify('Вход выполнен успешно');
    } catch (e) {
      addErrorNotify(e?.message || 'Ошибка входа!');
      console.log(e);
    }
  };

  return (
    <div>
      <form className={styles.wrapper} onSubmit={handler}>
        <h1 className={styles.title}>Вход</h1>
        <Input required={true} label="E-mail" name="login" />
        <Input required={true} label="Пароль" type="password" name="password" />
        <Button type="submit" className={styles.button} text="Войти" />
      </form>
      <Link className={styles.link} to="/register">
        Регистрация
      </Link>
    </div>
  );
};

export default LoginPage;
