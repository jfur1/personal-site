import React from 'react'
import styles from '../styles/work.module.scss'
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectTile = ({ project }) => {
    const { title, desc, githubLink, externalLink } = project

    return (
        <li className={styles.projectTile}>
            <div className={styles.icons}>
                <FiFolder style={{ transform: 'scale(2)' }} />
                <span className={styles.links}>
                    <FiGithub style={{ transform: 'scale(1.5)' }} />
                    <FiExternalLink style={{ transform: 'scale(1.5)' }} />
                </span>
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