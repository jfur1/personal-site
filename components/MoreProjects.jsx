import React, { useState } from 'react'
import styles from '../styles/work.module.scss'
import ProjectTile from './ProjectTile'

const MoreProjects = () => {

    const moreProjects = [
        {
            title: 'Lorem ipsum dolor sit amet ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        }
    ]

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => { setExpanded(!expanded) }

    return (
        <section className={styles.moreProjects}>
            <h1 className={styles.title}>Other Noteworthy Projects</h1>

            <ul className={styles.grid}>
                {moreProjects.map((project, idx) => 
                    expanded || idx < 6 ?
                        <ProjectTile project={project} key={idx}/> 
                    : null
                )}
            </ul>

            {moreProjects.length > 6
            ? 
                <button className={styles.toggleMore} onClick={handleClick}>
                    { expanded ? 
                        <span>Show Less</span> 
                        : <span>Show More</span> 
                    }
                </button>
            : null
            }
        </section>
    )
}

export default MoreProjects