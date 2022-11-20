import React from 'react'
import styles from '../styles/work.module.scss'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'
import MoreProjects from '../components/MoreProjects'

const MyWork = ({ scrollPercent, projectsRef }) => {

    console.log('SCROLL PERCENT:', scrollPercent)
  return (
    <>
        <section className={styles.projectsParallax} ref={projectsRef}>
            <h1 className={styles.projectsTitle} 
                style={scrollPercent > 0 && scrollPercent < 36 ?
                    { transform: `translateX(${ scrollPercent * 2 }%)` } : null}>
                MY WORK
            </h1>
            <div className={styles.projectsSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </section>

        <div className={styles.projectsContainer}>
            <ProjectGallery scrollPercent={scrollPercent}/>

            <MoreProjects/>
        </div>
    </>
  )
}

export default MyWork