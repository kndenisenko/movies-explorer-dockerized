// Запросы к beatfilm-movies

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: {
        ...this._headers,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const MoviesApi = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies/",
  headers: {
    "Content-Type": "application/json",
  },
});
