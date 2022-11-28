import React from 'react'
import styles from '../styles/work.module.scss'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'
import MoreProjects from '../components/MoreProjects'

const MyWork = ({ scrollPercent, projectsRef }) => {

  return (
    <>
        <section className={styles.projectsParallax} ref={projectsRef}>
            <h1 className={styles.projectsTitle} 
                style={scrollPercent > 0 && scrollPercent < 36 ?
                    { transform: `translateX(${ scrollPercent * 2 }%)` } : null}>
                MY WORK
            </h1>
            <div className={styles.projectsSubtitle}>
                {`Here is a gallery of some of the projects I've worked on recently, as well as a section with more projects, found below.`}
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