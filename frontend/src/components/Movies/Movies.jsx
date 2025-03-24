import "./movies.css";

// Компоненты блока с фильмами
import Searchform from "../Searchform/Searchform";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import { useState } from "react";

function Movies({
  allMoviesFromYandexApi,
  isLoading,
  counter,
  moreMovies,
  isSavedMoviesSection,
  isMainMoviesSection,
  savedMovies,
  findFilms,
  handleSaveMovie,
  handleUnSaveMovie,
  value,
  loadMoreMovies,
  activateShortFilmsToggle,
  shortfilmsSwitch,
}) {
  return (
    <>
      <Searchform
        findFilms={findFilms}
        allMoviesFromYandexApi={allMoviesFromYandexApi}
        activateShortFilmsToggle={activateShortFilmsToggle}
        shortfilmsSwitch={shortfilmsSwitch}
      />

      {allMoviesFromYandexApi ? (
        allMoviesFromYandexApi.length === 0 ? null : (
          <MoviesCardList
            handleSaveMovie={handleSaveMovie} //
            handleUnSaveMovie={handleUnSaveMovie} //
            isLoading={isLoading} //
            moreMovies={moreMovies} //
            allMoviesFromYandexApi={allMoviesFromYandexApi} //
            counter={counter}
            isSavedMoviesSection={isSavedMoviesSection}
            isMainMoviesSection={isMainMoviesSection}
            savedMovies={savedMovies}
            value={value}
            loadMoreMovies={loadMoreMovies}
          />
        )
      ) : null}
    </>
  );
}

export default Movies;
