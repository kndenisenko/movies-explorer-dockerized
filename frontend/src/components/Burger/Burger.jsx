import "./burger.css";

import { React } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.svg";

import { Pathes } from "../../utils/const";

function Burger({ isOpen, onClose }) {
  return (
    <section
      className={`burger__navigation ${isOpen && "burger__navigation-enable"}`}
    >
      <div className="burger__navigation-container">
        <Link
          to={Pathes.main}
          className="burger__navigation-link"
          onClick={onClose}
        >
          Главная
        </Link>
        <Link
          to={Pathes.movies}
          className="burger__navigation-link"
          onClick={onClose}
        >
          Фильмы
        </Link>
        <Link
          to={Pathes.savedMovies}
          className="burger__navigation-link"
          onClick={onClose}
        >
          Сохранённые фильмы
        </Link>
        <Link
          className="burger__navigation-button"
          to={Pathes.profile}
          onClick={onClose}
        ></Link>
        <Link
          className="burger__navigation-button"
          to={Pathes.profile}
          onClick={onClose}
        >
          <p className="burger__navigation-button-text">Аккаунт</p>
          <img
            className="burger__navigation-button-icon"
            src={user}
            alt="Иконка навигации-бургера"
          />
        </Link>
        <button
          className="burger__navigation-close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default Burger;
