import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './register-page.module.css';

import { serviceContext } from '../../contexts/service-context';
import { authContext } from '../../contexts/auth-context';

import { SingleSelect, Input, Button } from '../../components/common';
import { useRequest, useNotify } from '../../hooks';

import Spinner from '../../components/spinner';

const RegisterPage = () => {
  const { createUser, getAllCity } = useContext(serviceContext);
  const { login } = useContext(authContext);

  const { addErrorNotify, addSuccessNotify } = useNotify();
  const history = useHistory();

  const { data: cities, isLoading } = useRequest([], getAllCity);

  const [user, setUser] = useState({});

  const handler = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser(user);
      addSuccessNotify(res?.message || 'Пользователь успешно добавлен!');
      await login({ login: user.email, password: user.password });
      history.push('/profile');
      addSuccessNotify('Вы вошли в свой профиль!');
    } catch (error) {
      addErrorNotify(
        'При создании пользователя произошла ошибка! ' + error.message
      );
    }
  };

  const handlerInput = ({ target: { name, value } }) =>
    setUser((prev) => ({ ...prev, [name]: value }));

  const handlerSelect = (city) => setUser((prev) => ({ ...prev, city }));

  if (isLoading) return <Spinner />;

  return (
    <div>
      <form className={styles.wrapper} onSubmit={handler}>
        <h1 className={styles.title}>Регистрация</h1>
        <Input
          required={true}
          label="Имя"
          name="name"
          onChange={handlerInput}
        />
        <Input
          required={true}
          label="E-mail"
          name="email"
          onChange={handlerInput}
        />
        <Input label="Кодовое слово*" name="code" onChange={handlerInput} />
        <SingleSelect label="Город" data={cities} onChange={handlerSelect} />
        <Input
          required={true}
          label="Пароль"
          type="password"
          name="password"
          onChange={handlerInput}
        />
        <Button
          type="submit"
          className={styles.button}
          text="Зарегистироваться"
        />
      </form>
      <Link className={styles.link} to="/login">
        Вход
      </Link>
    </div>
  );
};

export default RegisterPage;
