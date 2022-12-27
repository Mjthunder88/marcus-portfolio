import React from "react";

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Marcus Johnson</h1>
      <div className={styles.dropdown_container}>
        <nav>
          <button>Resume</button>
          <a href="https://github.com/Mjthunder88" target="_blank" rel="noopener noreferrer" className={styles.a}>Github</a>
          <a href="https://www.linkedin.com/in/marcus-johnson-profile/" target="_blank" rel="noopener noreferrer" className={styles.a}>Linkdin</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
