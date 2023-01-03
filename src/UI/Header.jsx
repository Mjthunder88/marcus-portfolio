import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css'

const Header = () => {

  return (
    <header className={styles.header}>
      <Link to="/marcus-portfolio">
      <h1 className={styles.main_header}>Marcus Johnson</h1>
      </Link>
      <div className={styles.dropdown_container}>
        <nav className={styles.menu_button}>
          <Link to="/marcus-portfolio/resume" className={styles.a}>Resume</Link>
          <a href="https://github.com/Mjthunder88" target="_blank" rel="noopener noreferrer" className={styles.a}>Github</a>
          <a href="https://www.linkedin.com/in/marcus-johnson-profile/" target="_blank" rel="noopener noreferrer" className={styles.a}>Linkdin</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
