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
  // Нужно для прода (SSL делает Caddy)
  myapi: "https://api.badass.nomoredomains.club",
  // Нужно для разработки (внутрений SSL делает Caddy)
  myapidev: "https://api.local",
};

export { Pathes, Urls };
