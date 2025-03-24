import { Urls } from "../utils/const.js";

// const BASE_URL = Urls.myapi;
const BASE_URL = Urls.myapi;
// const BASE_URL = "http://localhost:3001";

// регистрация
export const registration = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

// Логин (авторизация)
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
};

export const token = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then(checkResponse);
};

// общая проверка ответа
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    throw new Error(data.message);
  });
};
