import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../UI/hamburger.css";
import styles from "./Header.module.css";
import logo2 from "../assets/logo-2.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <Link to="/marcus-portfolio">
        <img src={logo2} alt="portfolio_logo" className={styles.logo} />
      </Link>
      <div className={styles.dropdown_container}>
        <nav className={styles.menu_button}>
          <button
            className={
              isActive
                ? "hamburger hamburger--spring is-active"
                : "hamburger hamburger--spring"
            }
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div
            className={
              !isActive ? styles.drop_down : styles.drop_down_displayed
            }
          >
            <Link to="/marcus-portfolio/resume" className={styles.a} onClick={toggleMenu}>
              Resume
            </Link>
            <a
              href="https://github.com/Mjthunder88"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
              onClick={toggleMenu}
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-johnson-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
              onClick={toggleMenu}
            >
              Linkdin
            </a>
          <p className={styles.little_header}>Say whats up!</p>
        <div className={styles.bottom_content}>
        <a href="mailto: marcusjohnson88.mj@gmail.com" className={styles.a} onClick={toggleMenu}> marcusjohnson88.mj@gmail.com</a>
        <a href="https://www.youtube.com/channel/UCfUYFbmNm1TZo5la8mLswYw" className={styles.a}>Youtube</a>
        </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
