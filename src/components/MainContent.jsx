import React from 'react'

import styles from '../UI/MainContent.module.css'
import fresh from '../assets/fresh.png'

const MainContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.prime_content}>
                <article className={styles.inner_prime_content}>
                <h1 className={styles.prime_header}>Full Stack Developer</h1>
                <p> I Enjoy creating full-stack applications with a responsive UI to create a better user experince.</p>
                </article>
            <img src={fresh} alt="profile_pic" className={styles.fresh} />
            </div>
        </section>
    )
}

export default MainContent