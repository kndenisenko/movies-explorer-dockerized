import "./moviesCardList.css";

import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMovies from "../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
  allMoviesFromYandexApi,
  isLoading,
  // counter,
  // moreMovies,
  buttonMore,
  isMainMoviesSection,
  savedMovies,
  setSavedMovies,
  // token,
  handleSaveMovie,
  handleUnSaveMovie,
  // isSavedMoviesSection,
  value,
}) {
  const windowMovies = window.location.pathname === "/movies";
  const innerWidth = window.innerWidth;
  const [moreMovies, setMoreMovies] = useState(true);
  const [counter, setCounter] = useState(12);

  useEffect(() => {
    if (innerWidth > 769) {
      setCounter(12);
    } else if (innerWidth > 321) {
      setCounter(8);
    } else {
      setCounter(5);
    }
  }, [value]);

  function checkCounter() {
    if (allMoviesFromYandexApi.length > counter) {
      setMoreMovies(true);
    } else {
      setMoreMovies(false);
    }
  }

  function buttonMore() {
    if (innerWidth > 768) {
      if (allMoviesFromYandexApi.length > counter) {
        setCounter(counter + 3);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    } else if (innerWidth > 321) {
      if (allMoviesFromYandexApi.length > counter) {
        setCounter(counter + 2);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    } else {
      if (allMoviesFromYandexApi.length > counter) {
        setCounter(counter + 1);
        checkCounter();
      } else {
        setMoreMovies(false);
      }
    }
  }

  useEffect(() => {
    checkCounter();
  }, [allMoviesFromYandexApi, counter]);

  return isLoading ? (
    windowMovies ? (
      <>
        <section className="moviescardlist" aria-label="Фильмы">
          {allMoviesFromYandexApi.slice(0, counter).map((movie, i) => (
            <MoviesCard
              movie={movie}
              key={movie.id}
              isMainMoviesSection={isMainMoviesSection}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleUnSaveMovie={handleUnSaveMovie}
              windowMovies={windowMovies}
              // id={movie._id || movie.id}
            />
          ))}
        </section>
        {moreMovies ? <MoreMovies onClick={buttonMore} /> : null}
      </>
    ) : (
      <section className="moviescardlist" aria-label="Сохранённые Фильмы">
        {allMoviesFromYandexApi.map((movie, i) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            isMainMoviesSection={isMainMoviesSection}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            handleSaveMovie={handleSaveMovie}
            handleUnSaveMovie={handleUnSaveMovie}
            windowMovies={windowMovies}
            // id={movie._id || movie.id}
          />
        ))}
      </section>
    )
  ) : (
    <Preloader />
  );
}
