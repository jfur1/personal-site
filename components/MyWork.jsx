import React from 'react'
import styles from '../styles/work.module.scss'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'

const MyWork = ({ scrollPercent, projectsRef, scrollY }) => {

  return (
    <>
        <section className={styles.projectsParallax} ref={projectsRef}>
            <h1 className={styles.projectsTitle} 
                style={{ transform: `translateX(${ scrollPercent * .8 }%)` }}>
                MY WORK
            </h1>
            <div className={styles.projectsSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </section>

        <div className={styles.projectsContainer}>
            <ProjectGallery scrollY={scrollY} />

        <div className={styles.moreProjects}>
            <div className={styles.grid}>

            </div>
        </div>
    </div>
    </>
  )
}

export default MyWork