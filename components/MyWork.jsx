import React from 'react'
import styles from '../styles/Home.module.scss'

const MyWork = ({ scrollPercent, projectsRef }) => {
  return (
    <div className={styles.projectsContainer} ref={projectsRef}>

        <section className={styles.projectsParallax}>
        <h1 className={styles.projectsTitle} 
            style={{ transform: `translateX(${ scrollPercent * .75 }%)` }}>
            MY WORK
        </h1>
        <div className={styles.projectsSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        </section>

        
        <div className={styles.grid}>
            <img src='WU_0001.png' className={styles.iphone}/>
            <img src='WU_0002.png' className={styles.iphone}/>
            <img src='WU_0003.png' className={styles.iphone}/>
            <img src='WU_0004.png' className={styles.iphone}/>
        </div>

        <div className={styles.moreProjects}>
            <div className={styles.grid}>

            </div>
        </div>
    </div>
  )
}

export default MyWork