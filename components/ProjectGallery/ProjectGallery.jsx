import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import ProjectGalleryText from './ProjectGalleryText'
import ProjectGalleryImages from './ProjectGalleryImages'

const ProjectGallery = ({ scrollPercent }) => {

    const [projectIndex, setProjectIndex] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const pageSplitTimes = 1.4;
    const [scrollDirectionDown, setScrollDirectionDown] = useState(true);
    const [width, setWidth] = useState(0)
    const N_PROJECTS = 5;
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
            projectDesc: 'Full stack application desgined to help people stay consistent when forming new habits or breaking old ones.',
            projectType: 'WEB APP',
            roles: ['Full Stack Developer'],
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
            roles: ['Front-end Developer'],
        },
        {
          number: '05',
          projectName: 'Sorting Visualizer',
          projectDesc: 'Website created with React to help visualize various sorting algorithms.',
          projectType: 'WEB APP',
          roles: ['Front-end Developer'],
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
            var scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
            console.log('scrollDistance: ', scrollDistance)

            if (scrollDistance > lastScrollTop) {
                setScrollDirectionDown(true);
            } else {
                setScrollDirectionDown(false)
            }
            setLastScrollTop(scrollDistance);
            var scrollPos = window.scrollY
            // console.log(scrollDistance);
            
            var DELAY_FACTOR = 1.25;
            setWidth(Math.max(
                document.documentElement["clientWidth"],
                document.body["scrollWidth"],
                document.documentElement["scrollWidth"],
                document.body["offsetWidth"],
                document.documentElement["offsetWidth"]
            ))
            if(width < 395)
                DELAY_FACTOR = 2.65
            else if(width >= 395 && width < 500)
                DELAY_FACTOR = 2.25
            else if(width >= 500 && width < 780)
                DELAY_FACTOR = 1.15
            else if(width >= 780 && width < 1024)
                DELAY_FACTOR = 1.1
            else if(width >= 1024)
                DELAY_FACTOR = 1.1
                

            console.log('wdith:', width)
            console.log('window.screen.height:', window.screen.height)

            scrollDistance = scrollDistance - (window.screen.height * DELAY_FACTOR);

            if (Math.floor(scrollDistance / vh) !== projectIndex ) {

                    if(Math.floor(scrollDistance / vh) < 0)
                        setProjectIndex(0)
                    else if(Math.floor(scrollDistance / vh) > projects.length-1){
                        console.log('CHANGING')
                        setProjectIndex(projects.length-1);
                    }
                    else{
                        console.log('CHANGING');
                        setProjectIndex(Math.floor(scrollDistance / vh))
                    }
                }

            console.log('PROJECT IDX:', projectIndex)
            console.log('vh:', vh)
            console.log('scrollDistance:', scrollDistance)
        };
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216

        setVh((typeof(window) !== 'undefined' 
        ? Math.round((
            window.document.documentElement.clientHeight) * pageSplitTimes) : 0))
            
        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPercent, lastScrollTop, projectIndex, projects.length, vh])
    
    
    const changeTextContentBasedOnScroll = (projects, projectIndex) => {
        const refresh = true;
        console.log(projectIndex)

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
        <ProjectGalleryImages pageSplitTimes={pageSplitTimes} scrollPercent={scrollPercent} width={width}/>
    </div>
  )
}

export default ProjectGallery