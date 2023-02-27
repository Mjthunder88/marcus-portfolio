import React from "react";

import styles from "../UI/MainContent.module.css";
import fresh from "../assets/fresh.png";

const MainContent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.prime_content}>
        <article className={styles.inner_prime_content}>
          <h1 className={styles.prime_header}>Full-Stack Developer</h1>
          <p>
            I enjoy creating full-stack applications with a responsive UI to
            create a better user experience.
          </p>
        </article>
        <img src={fresh} alt="profile_pic" className={styles.fresh} />
      </div>
      <article className={styles.bottom_prime}>
        <div className={styles.bottom_prime_top}>
          <h1>About Me</h1>
          <p>
            I am a 22 year old software engineer/web developer in the Utah
            county area. Chasing my dreams as a web devloper and doing
            everything I can to better my skills in the tech industry! Outside
            of the tech industry I love watching football and basketball and
            enjoying a weekend with family and friends.
          </p>
        </div>
        <div className={styles.bottom_prime_bottom}>
          <h1>Engineering</h1>
          <p>
            Most proficient with Javascript and the PERN tech stack, but always
            looking to expand my capabilities. With the tools and skillset I
            have I can create fast solutions for problems that come my way but
            love working with others to find the best solutions for problems and
            find it to be the most rewarding during work.
          </p>
        </div>
      </article>
    </section>
  );
};

export default MainContent;
