import React from "react";

import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.primary_content}>
        <article className={styles.inner_top}>
          <h1>Personal Projects</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ratione? Nisi soluta modi maiores molestiae asperiores facilis ipsam
            nostrum quo similique odit a magnam itaque cum laudantium,
            architecto rerum odio?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Animi velit sed voluptatibus nostrum suscipit
            magnam sint. Molestias exercitationem sequi ad, repellendus
            adipisci, minus nobis expedita ut magni eligendi qui quo.lore
          </p>
        </article>
        <article className={styles.inner_bottom}>
          <h1>Tech Stack</h1>
          <div className={styles.icons_container}>
          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html_icon" />

          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css_icon" />
          
          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="react_icon" />
          

          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react_icon" />
          

          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux_icon" />


          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodeJs_icon" />


          <img className={styles.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresSql_icon" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SkillsSection;
