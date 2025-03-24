import "./student.css";
import photo from "../../images/photo.png";
import hoba from "../../images/hoba.png";

import React from "react";
import { Link } from "react-router-dom";

function Student() {
  // console.log('student')

  return (
    <section className="student" id="student">
      <h2 className="student__header">Студент</h2>
      <div className="student__info">
        <div className="student__info-container">
          <h3 className="student__info-name">Константин</h3>
          <p className="student__info-status">Фронтенд-разработчик, 30 лет</p>
          <p className="student__info-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu dictum lorem, sit amet dignissim nunc. Maecenas non accumsan tortor. Aliquam accumsan metus nec tempus tempor. Nunc vehicula eleifend finibus. Donec auctor nulla nec odio posuere consequat. Curabitur eget massa fringilla, posuere diam vel, efficitur odio. Vivamus nec aliquam dolor, at maximus urna. Sed a elit non neque tincidunt aliquet non id eros.
          </p>
        </div>
        <Link
          className="student__info-whoops"
          to="https://github.com/kndenisenko/"
          target={"_blank"}
        >
          Github
        </Link>
        <img
          className="student__info-photo"
          src={photo}
          alt="Фото автора этого сайта/ Наверное"
        />
      </div>
      <div className="student__portfolio">
        <h3 className="student__portfolio-header">Портфолио</h3>
        <ul className="student__portfolio-list">
          <li className="student__portfolio-list-item">
            <Link
              className="student__portfolio-list-link"
              to="https://probaland.ru/static/"
              target={"_blank"}
            >
              Статичный сайт
            </Link>
          </li>
          <li className="student__portfolio-list-item">
            <Link
              className="student__portfolio-list-link"
              to="https://probaland.ru/adaptive/"
              target={"_blank"}
            >
              Адаптивный сайт
            </Link>
          </li>
          <li className="student__portfolio-list-item">
            <Link
              className="student__portfolio-list-link"
              to="https://badass.students.nomoredomains.club"
              target={"_blank"}
            >
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Student;
