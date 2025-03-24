import "./navigation.css";

import React from "react";

function Navigation() {
  // console.log('navigation')

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a className="navigation__list-link" href="#about">
            О проекте
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__list-link" href="#tech">
            Технологии
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__list-link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
