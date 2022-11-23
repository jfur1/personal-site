import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const AboutMe = ({ scrollPercent, scrollTo, aboutRef, footerRef }) => {
  return (
    <div className={styles.aboutContainer} ref={aboutRef}>
            <div className={styles.aboutMeParallax}>

              <h1 className={styles.title} 
                style={scrollPercent > 0 && scrollPercent < 25 ? { transform: `translateX(${ scrollPercent * 3.75 }%)` }: null}>
                ABOUT ME
              </h1>
              <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>


            
            <div className={styles.grid}>
              <div className={styles.aboutMeDesc}>
                <p >
                  Hello! My name is John and I enjoy building things for the web.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div>
                  Here are a few of the technologies I've worked with recently:
                  <ul className={styles.skillsGrid}>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>C++</li>
                    <li>Sass</li>
                  </ul>
                </div>
              </div>

                <Image
                  src='/me.jpg'
                  className={styles.aboutMeImage}
                  alt="Picture of the author"
                  width={400}
                  height={400}  
                />

              {/* <div className={styles.aboutMeCards}>
                <a href="https://nextjs.org/docs" target='_blank'className={styles.card}>
                  <h2>Front End Development</h2>
                  <p>Create beautiful user interfaces that work seamlessly at scale.</p>
                </a>

                <a href="https://nextjs.org/learn" target='_blank' className={styles.card}>
                  <h2>Back End Development</h2>
                  <p>Build and maintain robust APIs while working closely with the servers.</p>
                </a>

                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>Download My Resume</h2>
                  <p>Create beautiful user interfaces that work seamlessly at scale.</p>
                </a>
              </div> */}
            </div>
          </div>
  )
}

export default AboutMe