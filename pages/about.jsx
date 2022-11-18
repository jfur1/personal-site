import React from 'react'
import styles from '../styles/about.module.scss'

const About = () => {
  return (
  <>
    <div className={styles.grid}>  
      <img src='WU_0001.png' className={styles.iphone} alt='WU_0001'/>
      <img src='WU_0002.png' className={styles.iphone} alt='WU_0002'/>
      <img src='WU_0003.png' className={styles.iphone} alt='WU_0003'/>
      <img src='WU_0004.png' className={styles.iphone} alt='WU_0004'/>
    </div>
  </>
  )
}

export default About