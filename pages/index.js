import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ParticleBackround from '../components/Particles'
import { useInView } from 'react-intersection-observer'
import Contact from './contact.jsx'
import AboutMe from '../components/AboutMe.jsx'
import MyWork from '../components/MyWork.jsx'

export default function Home({ theme, toggleTheme }) {
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  const { ref: subtitleRef, inView: subtitleIsVisible } = useInView();
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = useState(1);
  const router = useRouter();
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const footerRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =  document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
      const scrolled =(winScroll / height) * 100
  
      setScrollPercent(scrolled);
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
  
  const scrollTo = (ref, scrollToNavIdx) => {
    console.log(ref.current)
    if (!ref.current) return;

    setActiveIdx(scrollToNavIdx)
    ref.current.scrollIntoView({ alignToTop: false , behavior: "smooth" });
  }

  const scrollToTop = (ref) => {
    console.log(ref.current)
    if (!ref.current) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const MENU_LIST = [
    { text: "Home", href: "/", ref: homeRef },
    { text: "About", href: "/about", ref: aboutRef },
    { text: "My Work", href: "/work", ref: projectsRef },
    { text: "Contact", href: "/contact", ref: footerRef },
  ];
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
    <header>
      <nav className={`nav`}>
      <div onClick={() => {scrollToTop(homeRef)}}>
            <code className="logoText">{`< John Furlong />`}</code>
        </div>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <button 
            className={`mode-switch` + (theme === 'dark' ? ' active' : '')} 
            title="Switch Theme" 
            onClick={toggleTheme}>
            <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
          <div className={`nav__link ${activeIdx === 1 ? "active" : ""}`} onClick={() => {scrollTo(aboutRef, 1)}}>
            About
          </div>          
          <div className={`nav__link ${activeIdx === 2 ? "active" : ""}`} onClick={() => {scrollTo(projectsRef, 2)}}>
            Work
          </div>
          <div className={`nav__link ${activeIdx === 3 ? "active" : ""}`} onClick={() => {scrollTo(footerRef, 3)}}>
            Contact
          </div>
        </div>
      </nav>
    </header>

    <div className={styles.container}>

      <div className={styles.particlesContainer} ref={homeRef}>
        <ParticleBackround/>
        <div className={styles.particlesText}>
          <span ref={titleRef}>
            <h1 className={`${styles.heroTitle} ${titleIsVisible ? styles.show : ''}`}>John Furlong</h1>
          </span>
          <span ref={subtitleRef}>
            <p className={`${styles.heroSubtitle} ${subtitleIsVisible ? styles.show : ''}`}>Full Stack Software Engineer</p>
          </span>
        </div>
      </div>

      <Head>
        <title>John Furlong | Portfolio</title>
        <meta name="description" content="John Furlong portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { scrollPercent < 25
        ? <a className={styles.arrowWrap} onClick={() => scrollTo(aboutRef)} style={{ opacity: scrollIconOpacity }}>
            <span className={styles.arrow}></span>
          </a>
        : null
        }

          {/* <div className={styles.arrowWrap} onClick={() => scrollTo(aboutRef)} style={{ opacity: scrollIconOpacity }}>
            <span className={styles.mouse}>
              <span className={styles.mouseWheel}></span>
            </span>
          </div> */}

          <AboutMe scrollPercent={scrollPercent} scrollTo={scrollTo} aboutRef={aboutRef} footerRef={footerRef}/>


          <MyWork scrollPercent={scrollPercent} projectsRef={projectsRef} scrollY=    {scrollY}/>
      </main>

      <footer ref={footerRef} className={styles.footer}>
        <Contact/>
        <p className={styles.copyright}>&copy; All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}
