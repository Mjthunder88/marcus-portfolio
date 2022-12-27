import React from 'react'

import styles from '../UI/MainContent.module.css'
import fresh from '../assets/fresh.png'

const MainContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.prime_content}>
                <article>
                <h1 className={styles.prime_header}>Full Stack Developer</h1>
                <p></p>
                </article>
            <img src={fresh} alt="profile_pic" className={styles.fresh} />
            </div>
        </section>
    )
}

export default MainContent