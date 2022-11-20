import React from 'react'
import styles from '../styles/work.module.scss'

const ProjectTile = ({project}) => {
    const { title, desc } = project
    return (
        <li className={styles.projectTile}>
            <div className={styles.icons}>
                
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.desc}>
                {desc}
            </div>
            <ul className={styles.stack}>
                {project.stack.map((techItem, idx) => 
                    <li className={styles.techName} key={'item-' + idx}>
                        {techItem}
                    </li>
                )}
            </ul>
        </li>
    )
}

export default ProjectTile