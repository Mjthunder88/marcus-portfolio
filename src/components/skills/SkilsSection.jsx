import React from "react";

import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.primary_content}>
        <article className={styles.inner_top}>
          <h1>Personal Projects</h1>
          <div className={styles.project_container}>
            <div className={styles.project_info}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CibRbGz6rNI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className={styles.project_pictures}
              ></iframe>
              <div className={styles.link_container_bottom}>
                <a
                  href="https://github.com/Mjthunder88/Foundations-capstone-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.project_links}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className={styles.project_info}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5eqPbm42500"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className={styles.project_pictures}
              ></iframe>
              <div className={styles.link_container_bottom}>
                <a
                  href="https://car-link-app.herokuapp.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.project_links}
                >
                  Website
                </a>
                <a
                  href="https://github.com/Mjthunder88/car-link-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.project_links}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.inner_bottom}>
          <h1>Tech Stack</h1>
          <div className={styles.icons_container}>
            <img
              className={styles.icons_small}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg"
              alt="visual_Stuido_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="css_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="react_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="react_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="redux_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodeJs_icon"
            />

            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresSql_icon"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SkillsSection;
