import React, { useState } from 'react'
import styles from '../styles/work.module.scss'
import ProjectTile from './ProjectTile'

const MoreProjects = () => {

    const moreProjects = [
        {
            title: 'Habit Tracker',
            desc: 'Full stack habit tracker app designed to help keep users accountable while forming new habits.',
            githubLink: 'https://github.com/jfur1/back-burner',
            externalLink: '',
            stack: [
                'Next.js', 'SCSS', 'Node.js'
            ]
        },
        {
            title: 'my-portfol.io',
            desc: 'Full stack web application for users to host their personal portfolios on. Users can register, login and upload portfolio content to their profile.',
            githubLink: 'https://github.com/jfur1/my-portfol.io',
            externalLink: 'https://www.my-portfol.io/',
            stack: [
                'React.js', 'SQL', 'AWS'
            ]
        },
        {
            title: 'Pathfinding Visualizer',
            desc: `React application designed to help visualize various pathfinding algorithms like DFS, BFS, Astar and Dijkstra's`,
            githubLink: 'https://github.com/jfur1/pathfinding',
            externalLink: 'https://jfur1.github.io/pathfinding/',
            stack: [
                'React.js', 'SCSS'
            ]
        },
        {
            title: 'Sorting Visualizer',
            desc: 'React application designed to help visualize various sorting algorithms like quicksort, mergesort, and heapsort.',
            githubLink: 'https://github.com/jfur1/sorting-visualizer',
            externalLink: 'https://jfur1.github.io/sorting-visualizer/',
            stack: [
                'React.js', 'SCSS'
            ]
        },
        {
            title: 'Forte Music App',
            desc: 'Full stack application designed to match music students with local tutors. Users can login then search for teachers and schedule lessons.',
            githubLink: 'https://github.com/jfur1/cs-project',
            externalLink: 'http://forte-cu.herokuapp.com/',
            stack: [
                'JQuery', 'SQL', 'AWS'
            ]
        },
        {
            title: 'Blob Detection',
            desc: 'Computer vision python project implementing blob detection via color filtering, blob expansion, and centroid computations.',
            githubLink: 'https://github.com/jfur1/blob-detection',
            externalLink: '',
            stack: [
                'Python', 'NumPy', 'Pandas'
            ]
        },
        {
            title: 'DNS Name Resolution Engine',
            desc: 'Multi-threaded appication written in C, which resolves domain names to IP addresses. Requester/resolver threads share a memory buffer via mutex locks, pthreads, and semaphores.',
            githubLink: 'https://github.com/jfur1/operating-systems/tree/master/PA3',
            externalLink: '',
            stack: [
                'C'
            ]
        },
        {
            title: 'Job Hunter',
            desc: '*In Progress* Python script to help filter job search results from indeed.',
            githubLink: 'https://github.com/jfur1/indeed-scraper',
            externalLink: '',
            stack: [
                'Python'
            ]
        },
        {
            title: 'AI Searching',
            desc: '*In Progress* Jupyter notebook demonstrating an overview of the various types of search strategies used in artificial intelligence.',
            githubLink: 'https://github.com/jfur1/artificial-intelligence',
            externalLink: '',
            stack: [
                'Python', 'Jupyter'
            ]
        },
        {
            title: 'C++ DS&A',
            desc: '*In Progress* A crash course on fundamental data structures and algorithms.',
            githubLink: 'https://github.com/jfur1/fundamentals',
            externalLink: '',
            stack: [
                'Next.js', 'SCSS', 'AWS'
            ]
        },
        {
            title: 'Daily Coding Problem',
            desc: '*In Progress* My solutions to the free Daily Coding Problem email subscription.',
            githubLink: 'https://github.com/jfur1/daily-coding-problem',
            externalLink: '',
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

            {moreProjects?.length > 6
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