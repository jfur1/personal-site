import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import ProjectGalleryText from './ProjectGalleryText'
import ProjectGalleryImages from './ProjectGalleryImages'

const ProjectGallery = ({ scrollY }) => {

    const [projectIndex, setProjectIndex] = useState(0);
    var lastScrollTop = 0;
    const pageSplitTimes = 1.4
    var scrollDirectionDown = true;
    const [vh, setVh] = useState(typeof(window) !== 'undefined' ? Math.round(window.document.documentElement.clientHeight * pageSplitTimes) : 0)
    const projects = [
        {
            number: '',
            projectName: '',
            projectDesc: '',
            projectType: '',
            roles: [''],
        },
        {
            number: '01',
            projectName: 'Western Union',
            projectDesc: 'Software engineer for Western Union.',
            projectType: 'Full Stack Development',
            roles: ['Software Engineer'],
        },
        {
            number: '02',
            projectName: 'Habit Tracker',
            projectDesc: 'Website designed to help users stay on top of their habits by keeping track of consistency.',
            projectType: 'WEB APP',
            roles: ['Full Stack Developer', 'UI Designer'],
        },
        {
            number: '03',
            projectName: 'my-portfol.io',
            projectDesc: 'Full stack web application designed as a place for users to display their personal portfolios.',
            projectType: 'WEB APP',
            roles: ['Full Stack Developer'],
        },
        {
            number: '04',
            projectName: 'Pathfinding Visualizer',
            projectDesc: 'Website created with React to help visualize various pathfinding algorithms.',
            projectType: 'WEB APP',
            roles: ['Front-end Developer', 'UI Designer'],
        },
        {
          number: '05',
          projectName: 'Sorting Visualizer',
          projectDesc: 'Website created with React to help visualize various sorting algorithms.',
          projectType: 'WEB APP',
          roles: ['Front-end Developer', 'UI Designer'],
        },
        {
          number: '',
          projectName: '',
          projectDesc: '',
          projectType: '',
          roles: [''],
        },
      ];

    useEffect(() => {

        const handleScroll = () => {
            const documentElement = document.documentElement
            const body = document.body
            const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
            if (scrollDistance > lastScrollTop) {
                scrollDirectionDown = true;
            } else {
                scrollDirectionDown = false;
            }
            lastScrollTop = scrollDistance;
            // console.log(scrollDistance);
    
            if (Math.floor(scrollDistance / vh) !== projectIndex
                && projectIndex < projects.length - 1) {
                setProjectIndex(Math.floor(scrollDistance / vh))
            } else if (projectIndex === projects.length - 1
                && (Math.floor(scrollDistance / vh) < projectIndex)) {
                setProjectIndex(Math.floor(scrollDistance / vh))
            }
            setVh((typeof(window) !== 'undefined' ? Math.round(window.document.documentElement.clientHeight * pageSplitTimes) : 0))

            console.log('PROJECT IDX:', projectIndex)
            // console.log('PROJECT VH:', vh)
        };
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216

        // setVh(Math.round(window.document.documentElement.clientHeight * pageSplitTimes))
        handleScroll();

        //get scroll position
        var topWindow = window.scrollY;
        // multiply by 1.5 so the arrow will become transparent half-way up the page
        var topWindow = topWindow * 1.5;
    
        //get height of window
        var windowHeight = window.screen.height;
            
        //set position as percentage of how far the user has scrolled 
        var position = topWindow / windowHeight;
        //invert the percentage
        position = 1 - position;
    
        //define arrow opacity as based on how far up the page the user has scrolled
        //no scrolling = 1, half-way up the page = 0
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollY])
    
    
    const changeTextContentBasedOnScroll = (projects, projectIndex) => {
        const refresh = true;
        return (
            <ProjectGalleryText 
                className={styles.projectGalleryText}
                number={projects[projectIndex].number}
                projectName={projects[projectIndex].projectName}
                projectDesc={projects[projectIndex].projectDesc}
                projectType={projects[projectIndex].projectType}
                roles={projects[projectIndex].roles}
                refreshToggle={refresh}
            />
        );
      }
    

  return (
    <div className={styles.projectsGallery}>
        {changeTextContentBasedOnScroll(projects, projectIndex)}
        <ProjectGalleryImages />

        {/* <div className={styles.grid}>
            <img src='WU_0001.png' className={styles.iphone}/>
            <img src='WU_0002.png' className={styles.iphone}/>
            <img src='WU_0003.png' className={styles.iphone}/>
            <img src='WU_0004.png' className={styles.iphone}/>
        </div> */}
    </div>
  )
}

export default ProjectGallery