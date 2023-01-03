import React from "react";

import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.prime_content}>
        <h1 className={styles.prime_header}>Contact Me</h1>
        <h2 className={styles.sub_header}>Email: marcusjohnson88.mj@gmail.com</h2>
      </div>
    </section>
  );
};

export default ContactSection;
