import React from 'react'

import styles from './SkillsSection.module.css'

const SkillsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.primary_content}>
            <article className={styles.inner_top}>
                <h1>Projects</h1>
            </article>
            <article className={styles.inner_bottom}>
                <h1>Tech Stack</h1>
            </article>
            </div>
        </section>
    )
}

export default SkillsSection