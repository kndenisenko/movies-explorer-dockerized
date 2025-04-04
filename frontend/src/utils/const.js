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
  // myapi: "https://site.probaland.ru/api",
  // Для разработки, менять в Auth.js на фронте
  // myapidev: "https://site.probaland.ru/api",

  // автовыбор на основе ENV в файлах docker.compose
  myapi: (process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_FRONT_DOMAIN_PROD + "/api" : process.env.REACT_APP_FRONT_DOMAIN_DEV + "/api")
};

export { Pathes, Urls };
