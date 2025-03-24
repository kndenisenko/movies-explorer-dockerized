import "./footer.css";

import React from "react";
import { Link } from "react-router-dom";
import preval from "preval.macro";

function Footer() {
  // console.log('Footer')
  const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;

  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__copywright">
        &#169; 2023,{" "}
        <span className="footer__build-date">Build Date: {dateTimeStamp}</span>
      </p>
      <nav className="footer__navy">
        <Link
          className="footer__navy-link"
          to="https://practicum.yandex.ru/"
          target={"_blank"}
        >
          Яндекс.Практикум
        </Link>
        <Link
          className="footer__navy-link"
          to="https://github.com/"
          target={"_blank"}
        >
          GitHub
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
