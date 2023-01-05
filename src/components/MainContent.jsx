import React from 'react'

import styles from '../UI/MainContent.module.css'
import fresh from '../assets/fresh.png'

const MainContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.prime_content}>
                <article className={styles.inner_prime_content}>
                <h1 className={styles.prime_header}>Full-Stack Developer</h1>
                <p> I enjoy creating full-stack applications with a responsive UI to create a better user experince.</p>
                </article>
            <img src={fresh} alt="profile_pic" className={styles.fresh} />
            </div>
            <article className={styles.bottom_prime}>
                <div className={styles.bottom_prime_top}>
                <h1>About Me</h1>
                <p>I am a 22 year old software engineer/developer in the Utah county area. I have made a switch in my career path to pursue something I enjoy! I am always trying to better my skills in the tech industry and love working with individuals to do so.</p>
                </div>
                <div className={styles.bottom_prime_bottom}>
                    <h1>Tech I want to learn:</h1>
                    <ul>
                        <li>TypeScript</li>
                        <li>React Native</li>
                        <li>SASS</li>
                        <li>AWS</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default MainContent