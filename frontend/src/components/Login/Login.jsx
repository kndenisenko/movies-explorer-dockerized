import "./login.css";

import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Pathes } from "../../utils/const";

// import logo from "../../images/logo.svg";

function Login({
  handleLogin,
  isUserLoggedIn,
  history,
  errorMessageLog,
  setErrorMessageLog,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [loginEmail, loginPassword] = watch(["loginEmail", "loginPassword"]);

  function onSubmit() {
    handleLogin(loginEmail, loginPassword);
  }

  // console.log('errorMessage', errorMessage)
  // console.log('errorMessageLog - login', errorMessageLog)

  useEffect(() => {
    setErrorMessageLog("");
  }, []);

  return isUserLoggedIn ? (
    history(`${Pathes.main}`)
  ) : (
    <section className="login">
      <div className="login__container">
        <Link to={Pathes.movies} className="login__logo"></Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <p className="login__form-header">E-mail</p>
          <input
            className="login__input"
            type="text"
            placeholder="Введите E-mail"
            {...register("loginEmail", {
              required: "Введите e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Проверьте почтовый адрес",
              },
            })}
          />
          <span className="login__error">{errors?.loginEmail?.message}</span>
          <p className="login__form-header">Пароль</p>
          <input
            className="login__input"
            type="password"
            placeholder="Введите пароль"
            {...register("loginPassword", {
              required: "Введите пароль",
            })}
          />
          <span className="login__error">
            {errors?.loginPassword &&
              "Укажите пароль. Можно взять pass например"}
          </span>
          <span className="login__error">{errorMessageLog}</span>
          <button className="login__button" type="submit">
            Войти
          </button>
        </form>
        <div className="login__bottom-container">
          <p className="login__bottom-container-text">
            Ещё не зарегистрированы?
          </p>
          <Link to={Pathes.register} className="login__bottom-container-link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
