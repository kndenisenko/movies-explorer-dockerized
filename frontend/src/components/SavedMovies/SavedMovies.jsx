import "./SavedMovies";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Searchform/Searchform";

export default function SavedMovies({
  handleSaveMovie,
  handleUnSaveMovie,
  allMoviesFromYandexApi,
  isLoading,
  isSavedMoviesSection,
  savedMovies,
  findFilms,
  activateShortFilmsToggle,
  shortfilmsSwitch,
}) {
  // console.log('savedMovies', savedMovies);

  return (
    <>
      <SearchForm
        findFilms={findFilms}
        allMoviesFromYandexApi={allMoviesFromYandexApi}
        activateShortFilmsToggle={activateShortFilmsToggle}
        shortfilmsSwitch={shortfilmsSwitch}
      />

      {allMoviesFromYandexApi.length === 0 ? null : (
        <MoviesCardList
          handleSaveMovie={handleSaveMovie}
          handleUnSaveMovie={handleUnSaveMovie}
          allMoviesFromYandexApi={allMoviesFromYandexApi}
          isLoading={isLoading}
          isSavedMoviesSection={isSavedMoviesSection}
          savedMovies={savedMovies}
        />
      )}
    </>
  );
}
