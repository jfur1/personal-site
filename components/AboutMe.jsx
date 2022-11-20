import React from 'react'
import styles from '../styles/Home.module.scss'

const AboutMe = ({ scrollPercent, scrollTo, aboutRef, footerRef }) => {
  return (
    <div className={styles.aboutContainer} ref={aboutRef}>
            <div className={styles.aboutMeParallax}>

              <h1 className={styles.title} 
                style={scrollPercent > 0 && scrollPercent < 25 ? { transform: `translateX(${ scrollPercent * 3 }%)` }: null}>
                ABOUT ME
              </h1>
              <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" target='_blank'className={styles.card}>
                <h2>Front End Development</h2>
                <p>Create beautiful user interfaces that work seamlessly at scale.</p>
              </a>

              <a href="https://nextjs.org/learn" target='_blank' className={styles.card}>
                <h2>Back End Development</h2>
                <p>Build and maintain robust APIs while working closely with the servers.</p>
              </a>


              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Front End Development</h2>
                <p>Create beautiful user interfaces that work seamlessly at scale.</p>
              </a>

              <a onClick={() => scrollTo(footerRef)} className={styles.card}>
                <h2>Contact Me &darr;</h2>
                <p>Have an idea?</p>
                <p>Tell me about it!</p>
              </a>
              
              <div className={styles.projectsCard} style={{ backgroundImage: `url("my_work_temp.webp")` }}>
                  <h2>My Work &rarr;</h2>
                  <p>Take a look at even more of my past projects!</p>
              </div>

            </div>
          </div>
  )
}

export default AboutMe