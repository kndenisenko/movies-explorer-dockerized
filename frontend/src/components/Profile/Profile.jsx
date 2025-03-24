import "./profile.css";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Pathes } from "../../utils/const";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
// import { useEffect } from "react";

function Profile({
  onUpdateUser,
  handleSignOut,
  confirmMessage,
  onUpdateUseState,
  errorMessage,
}) {
  // console.log("profile");
  const currentUser = React.useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      profileName: localStorage.getItem("profileName"),
      profileEmail: localStorage.getItem("profileEmail"),
    },
  });

  const [profileName, profileEmail] = watch(["profileName", "profileEmail"]);

  // console.log('errors', Object.keys(errors).length)

  function checkValidity() {
    if (
      profileName === currentUser.name &&
      profileEmail === currentUser.email
    ) {
      return (
        <button className="profile__same" type="submit" disabled>
          Для сохранения данных профиля измените Имя или E-mail
        </button>
      );
    } else {
      if (Object.keys(errors).length > 0) {
        return (
          <button className="profile__need-changes" type="submit" disabled>
            Исправьте ошибки для обновления профиля
          </button>
        );
      } else {
        return (
          <button className="profile__save-changes" type="submit">
            Редактировать
          </button>
        );
      }
    }
  }

  function hideError() {
    document.getElementsByClassName(
      "profile__confirm-message"
    )[0].style.display = "none";
  }

  function resetError() {
    document.getElementsByClassName(
      "profile__confirm-message"
    )[0].style.display = "block";
  }

  useEffect(() => {
    onUpdateUseState();
    resetError();
  }, [profileName, profileEmail]);

  function onSubmit() {
    onUpdateUser(profileName, profileEmail);
    setTimeout(hideError, 5000);
  }

  return (
    <section className="profile">
      <h1 className="profile__header">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__container">
          <p className="profile__container-name">Имя</p>
          <input
            {...register("profileName", {
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
            className="profile__input"
            placeholder="Имя"
            required
          />
        </div>
        <span className="profile__error">{errors?.profileName?.message}</span>
        <div className="profile__container">
          <p className="profile__container-name">E-mail</p>
          <input
            className="profile__input"
            placeholder="pochta@yandex.ru"
            {...register("profileEmail", {
              required: "Введите e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Проверьте почтовый адрес",
              },
            })}
            required
          />
        </div>
        <span className="profile__error">{errors?.profileEmail?.message}</span>
        <span className="profile__confirm-message">
          {confirmMessage ? "Данные успешно обновлены!" : ""}
          {errorMessage ? errorMessage : ""}
        </span>
        {checkValidity()}
        <Link
          to={Pathes.main}
          className="profile__logout"
          onClick={handleSignOut}
        >
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
