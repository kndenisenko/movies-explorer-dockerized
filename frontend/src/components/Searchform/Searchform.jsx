import "./searchform.css";

import { React, useEffect, useState } from "react";
import Switch from "react-switch";
import { useForm } from "react-hook-form";
import { check } from "prettier";

function Searchform({
  findFilms,
  checkedToggle,
  allMoviesFromYandexApi,
  activateShortFilmsToggle,
  shortfilmsSwitch,
}) {
  const windowMovies = window.location.pathname === "/movies";
  const windowSavedMovies = window.location.pathname === "/saved-movies";

  const [checkedMovies, setcheckedMovies] = useState(
    JSON.parse(localStorage.getItem("switchStatusMovies"))
  );
  const [isIosToggleActiveMovies, setisIosToggleActiveMovies] = useState(
    JSON.parse(localStorage.getItem("switchStatusMovies"))
  );

  // 🩼 для работы 🩼-переключателя
  const iosToggleChangeMovies = (nextChecked) => {
    setisIosToggleActiveMovies(!isIosToggleActiveMovies);
    activateShortFilmsToggle(!isIosToggleActiveMovies);

    localStorage.setItem("switchStatusMovies", JSON.stringify(nextChecked));

    if (nextChecked === false) {
      // localStorage.removeItem("shortfilms")
    }

    setcheckedMovies(nextChecked);
  };

  const [checkedSavedMovies, setcheckedSavedMovies] = useState(
    JSON.parse(localStorage.getItem("switchStatusSavedMovies"))
  );
  const [isIosToggleActiveSavedMovies, setisIosToggleActiveSavedMovies] =
    useState(JSON.parse(localStorage.getItem("switchStatusSavedMovies")));

  // 🩼 для работы 🩼-переключателя
  const iosToggleChangeSavedMovies = (nextChecked) => {
    setisIosToggleActiveSavedMovies(!isIosToggleActiveSavedMovies);
    activateShortFilmsToggle(!isIosToggleActiveSavedMovies);

    localStorage.setItem(
      "switchStatusSavedMovies",
      JSON.stringify(nextChecked)
    );

    if (nextChecked === false) {
      // localStorage.removeItem("shortfilms")
    }

    setcheckedSavedMovies(nextChecked);
  };

  // console.log(localStorage.getItem("switchStatusMovies"))
  // console.log(isIosToggleActiveMovies)

  // поведение переключателя, при открытии страницы saved-movies
  // запоминать состояние переключателя при переходе на страницу saved-movies
  // и возвращать его обратно, если он переключался
  // useEffect(() => {
  //   if (windowSavedMovies) {
  //     console.log('saved-movies')
  //     if (JSON.parse(localStorage.getItem("switchStatusBuffer")) === true) {
  //       setcheckedMovies(true)
  //       setisIosToggleActiveMovies(true)
  //       localStorage.setItem("switchStatusMovies", true)
  //       localStorage.setItem("switchStatusBuffer", false)
  //     } else {}
  //   }
  // }, []);

  // выставление switchStatusMovies, если его ещё нет в localstorage,
  // это происходит при первой загрузке страницы
  useEffect(() => {
    if (localStorage.getItem("switchStatusMovies") === null) {
      localStorage.setItem("switchStatusMovies", false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("switchStatusSavedMovies") === null) {
      localStorage.setItem("switchStatusSavedMovies", false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      inputFindMovie: windowMovies ? localStorage.getItem("valueMovies") : null,
    },
  });
  const inputFindMovieValue = watch(
    windowMovies ? "inputFindMovie" : "inputFindSavedMovie"
  );

  function onSubmit() {
    findFilms(inputFindMovieValue);
    windowMovies
      ? localStorage.setItem("valueMovies", inputFindMovieValue)
      : localStorage.setItem("valueSavedMovies", inputFindMovieValue);
  }

  // console.log(inputFindMovieValue)

  return (
    <section className="searchform">
      <form className="searchform__search" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(
            windowMovies ? "inputFindMovie" : "inputFindSavedMovie",
            {
              required: "Нужно ввести ключевое слово",
            }
          )}
          className="searchform__search-form"
          type="text"
          placeholder="Фильм"
        />
        <button className="searchform__search-button" type="submit"></button>
      </form>
      <div className="switch__container">
        {windowMovies ? (
          <Switch
            className="react-switch"
            checked={checkedMovies}
            onClick={checkedToggle}
            onChange={iosToggleChangeMovies}
            onColor="#3DDC84"
            height={20}
            width={36}
            handleDiameter={16}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        ) : (
          <Switch
            className="react-switch"
            checked={checkedSavedMovies}
            onClick={checkedToggle}
            onChange={iosToggleChangeSavedMovies}
            onColor="#3DDC84"
            height={20}
            width={36}
            handleDiameter={16}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        )}
        <p className="react-switch__name">Короткометражки</p>
      </div>
      {windowMovies
        ? errors?.inputFindMovie && (
            <p className="searchform__errors">Нужно ввести ключевое слово</p>
          )
        : errors?.inputFindSavedMovie && (
            <p className="searchform__errors">Нужно ввести ключевое слово</p>
          )}
      {allMoviesFromYandexApi
        ? allMoviesFromYandexApi.length === 0 && (
            <p className="searchform__errors">Ничего не найдено</p>
          )
        : null}
    </section>
  );
}

export default Searchform;
