import "./register.css";

import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Pathes } from "../../utils/const";

function Register({
  handleRegister,
  isUserLoggedIn,
  history,
  errorMessageReg,
  setErrorMessageReg,
}) {
  // console.log("Register");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [registrationName, registrationEmail, registrerPassword] = watch([
    "registrationName",
    "registrationEmail",
    "registrerPassword",
  ]);

  // // console.log("isUserLoggedIn", isUserLoggedIn);
  // console.log('errors-reg', errorMessageReg)

  useEffect(() => {
    setErrorMessageReg("");
  }, []);

  function onSubmit() {
    handleRegister(registrationName, registrationEmail, registrerPassword);
  }

  return isUserLoggedIn ? (
    history(`${Pathes.main}`)
  ) : (
    <section className="register">
      <div className="register__container">
        <Link to={Pathes.main} className="register__logo"></Link>
        <h1 className="register__header">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
          <p className="register__form-header">Имя</p>
          <input
            className="register__input"
            type="text"
            placeholder="Введите имя"
            {...register("registrationName", {
              required: "Введите имя",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 30,
                message: "Максимум 30 символа",
              },
            })}
          />
          <span className="register__error">
            {errors?.registrationName?.message}
          </span>
          <p className="register__form-header">E-mail</p>
          <input
            className="register__input"
            type="text"
            placeholder="Введите E-mail"
            {...register("registrationEmail", {
              required: "Введите e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Проверьте почтовый адрес",
              },
            })}
          />
          <span className="register__error">
            {errors?.registrationEmail?.message}
          </span>
          <p className="register__form-header">Пароль</p>
          <input
            className="register__input"
            type="password"
            placeholder="Введите пароль"
            {...register("registrerPassword", {
              required: "Введите пароль",
            })}
          />
          <span className="register__error">
            {errors?.registrerPassword &&
              "Укажите пароль. Можно взять pass например"}
          </span>
          <span className="register__error">{errorMessageReg}</span>

          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__bottom-container">
          <p className="register__bottom-container-text">
            Уже зарегистрированы?
          </p>
          <Link to={Pathes.login} className="register__bottom-container-link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
