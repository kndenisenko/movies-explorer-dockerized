import "./about.css";

import React from "react";

function About() {
  // console.log('About')

  return (
    <section className="about" id="about">
      <h2 className="about__header">О проекте</h2>
      <ul className="about__list">
        <li className="about__list-item">
          <h3 className="about__list-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__list-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__list-item">
          <h3 className="about__list-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__list-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about__container">
        <p className="about__container-text about__container-left">1 Неделя</p>
        <p className="about__container-text about__container-right">4 Недели</p>
        <p className="about__container-text about__container-text-left">
          Back-end
        </p>
        <p className="about__container-text about__container-text-right">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default About;
