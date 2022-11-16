import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ParticleBackround from '../components/Particles'
import { useInView } from 'react-intersection-observer'
import Contact from './contact.jsx'

export default function Home() {
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  const { ref: subtitleRef, inView: subtitleIsVisible } = useInView();
  const [scrollY, setScrollY] = useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = useState(1);
  const router = useRouter();
  const myRef1 = React.useRef();
  const myRef2 = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
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
    setScrollIconOpacity(position);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY])
  
  const scrollTo = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.container}>

      <div className={styles.particlesContainer}>
        <ParticleBackround/>
        <div className={styles.particlesText}>
          <span ref={titleRef}>
            <h1 className={`${styles.heroTitle} ${titleIsVisible ? styles.show : ''}`}>Hello, my name is John.</h1>
          </span>
          <span ref={subtitleRef}>
            <p className={`${styles.subtitle} ${subtitleIsVisible ? styles.show : ''}`}>Full Stack Software Engineer</p>
          </span>
        </div>
      </div>

      <Head>
        <title>John Furlong | Portfolio</title>
        <meta name="description" content="John Furlong portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a className={styles.arrowWrap} onClick={() => scrollTo(myRef1)} style={{ opacity: scrollIconOpacity }}>
          <span className={styles.arrow}></span>
        </a>

          <div className={styles.content} ref={myRef1}>
            <h1 className={styles.title}>
              My Skills
            </h1>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Front End Development</h2>
                <p>Create beautiful user interfaces that work seamlessly at scale.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Back End Development</h2>
                <p>Build and maintain robust APIs while working closely with the servers.</p>
              </a>

              <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                <h2>My Work &rarr;</h2>
                <p>Take a look at some of my past projects!</p>
              </a>
            </div>
          </div>

          <div className={styles.content} ref={myRef2}>
            <h1 className={styles.title}>
              My Skills
            </h1>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Front End Development</h2>
                <p>Create beautiful user interfaces that work seamlessly at scale.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Back End Development</h2>
                <p>Build and maintain robust APIs while working closely with the servers.</p>
              </a>

              <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                <h2>My Work &rarr;</h2>
                <p>Take a look at some of my past projects!</p>
              </a>
            </div>
          </div>

      </main>

      <footer className={styles.footer}>
        <Contact/>
      </footer>
    </div>
  )
}
