import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const AboutMe = ({ scrollPercent, scrollTo, aboutRef, footerRef, width }) => {
  var transX = 1.75, start = '0%'
  if(width < 395){
      transX = 1.75;
      start = '-20%'
  }
  else if(width >= 395 && width < 500)
      transX = 1.75
  else if(width >= 500 && width < 1281){
      transX = 1.75
      start = '-30%'
  }
  else if(width >= 1281){
      transX = 1.75
      // start = '-30%'
  }
  return (
    <div className={styles.aboutContainer} ref={aboutRef}>
            <div className={styles.aboutMeParallax}>

              <h1 className={styles.title} 
                style={scrollPercent > 0 && scrollPercent < 35 ? 
                { transform: `translateX(${ scrollPercent * 1.75 }%)`,
                  left: start
                }
                : null}>
                {`ABOUT ME`}
              </h1>
              <div className={styles.subtitle}>
                {`Full stack software engineer focused on creating fast, scalable systems for the web`}
              </div>
            </div>


            
            <div className={styles.grid}>
              <div className={styles.aboutMeDesc}>
                <p >
                  {`Hello! My name is John and I enjoy building things for the web.`}
                </p>
                <p>
                  {`I graduated with my degree in computer science in 2016 and I've had the privelage of working with small business clients as well as in a large scale production environment at Western Union.`}
                </p>
                <p>
                  {`I am experienced in creating outstanding user experiences, from interfaces to APIs.`}
                </p>
                <div>
                  {`Here are a few of the technologies I've worked with recently:`}
                  <ul className={styles.skillsGrid}>
                    <li>{`JavaScript (ES6+)`}</li>
                    <li>{`React.js`}</li>
                    <li>{`Node.js`}</li>
                    <li>{`Next.js`}</li>
                    <li>{`C++`}</li>
                    <li>{`TypeScript`}</li>
                  </ul>
                </div>
              </div>

                <img
                  src='me.jpg'
                  className={styles.aboutMeImage}
                  alt="Picture of the author"
                  width={400}
                  height={400}  
                />
            </div>
          </div>
  )
}

export default AboutMe