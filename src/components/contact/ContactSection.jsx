import React from "react";

import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.prime_content}>
        <h1 className={styles.prime_header}>Contact Me</h1>
        <a href="mailto: marcusjohnson88.mj@gmail.com" className={styles.sub_header}>Email: marcusjohnson88.mj@gmail.com</a>
      </div>
    </section>
  );
};

export default ContactSection;
