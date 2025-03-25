// какие-то стандартные настройки, которые импортируются по мере надобности

// список путей сайта
const Pathes = {
  main: "/",
  movies: "/movies",
  protectedMovies: "/movies/*",
  savedMovies: "/saved-movies",
  protectedSavedMovies: "/saved-movies/*",
  profile: "/profile",
  protectedProfile: "/profile/*",
  register: "/register",
  login: "/login",
};

const Urls = {
  // Отсюда берутся фильмы, не менять
  superSecretUrl: "https://api.nomoreparties.co/",

  // Для прода, менять в Auth.js
  myapi: "https://site.probaland.ru/api",

  // Для разработки, менять в Auth.js
  myapidev: "https://site.probaland.ru/api",
};

export { Pathes, Urls };
