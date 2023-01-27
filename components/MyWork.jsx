import React from 'react'
import styles from '../styles/work.module.scss'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'
import MoreProjects from '../components/MoreProjects'

const MyWork = ({ scrollPercent, projectsRef, width }) => {
    var transX = 1, start = '-50%'
    if(width < 395){
        transX = 2;
        start = '-60%'
    }
    else if(width >= 395 && width < 500)
        transX = 2
    else if(width >= 500 && width < 780){
        transX = 2
        start = '-90%'
    }
    else if(width >= 780 && width < 1024){
        transX = 2.5
        start = '-60%'
    }
    else if(width >= 1024)
        transX = 2
  return (
    <>
        <section className={styles.projectsParallax} ref={projectsRef}>
            <h1 className={styles.projectsTitle} 
                style={scrollPercent > 0 && scrollPercent < 36 ?
                    { transform: `translateX(${ scrollPercent * transX }%)`,
                    left: start
                } : null}
            >
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