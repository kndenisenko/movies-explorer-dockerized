import "./tech.css";

import React from "react";
import { Link } from "react-router-dom";

function Tech() {
  // console.log('Tech')

  return (
    <section className="tech" id="tech">
      <h2 className="tech__header">Технологии</h2>
      <div className="tech__container">
        <h3 className="tech__container-header">7 технологий</h3>
        <p className="tech__container-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="tech__list">
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
            target={"_blank"}
          >
            HTML
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics"
            target={"_blank"}
          >
            CSS
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://learn.javascript.ru/"
            target={"_blank"}
          >
            JS
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://doka.guide/tools/react-and-alternatives/"
            target={"_blank"}
          >
            React
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/GitHub"
            target={"_blank"}
          >
            Git
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs"
            target={"_blank"}
          >
            Express.js
          </Link>
        </li>
        <li className="tech__list-item">
          <Link
            className="tech__list-link"
            to="https://www.mongodb.com/"
            target={"_blank"}
          >
            mongoDB
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Tech;
