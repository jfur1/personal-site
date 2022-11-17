import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ParticleBackround from '../components/Particles'
import { useInView } from 'react-intersection-observer'
import Contact from './contact.jsx'

export default function Home({ theme, toggleTheme }) {
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  const { ref: subtitleRef, inView: subtitleIsVisible } = useInView();
  const [scrollY, setScrollY] = useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = useState(1);
  const router = useRouter();
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const footerRef = React.useRef();

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
    console.log(ref.current)
    if (!ref.current) return;
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
    { text: "Contact", href: "/contact", ref: footerRef },
  ];
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
            <code className="logoText">{`< John Furlong />`}</code>
        </Link>

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
          <div onClick={() => {scrollToTop(homeRef)}}>
            Home
          </div>
          <div onClick={() => {scrollTo(aboutRef)}}>
            About
          </div>          
          <div onClick={() => {scrollTo(aboutRef)}}>
            My Work
          </div>
          <div onClick={() => {scrollTo(footerRef)}}>
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
        <a className={styles.arrowWrap} onClick={() => scrollTo(aboutRef)} style={{ opacity: scrollIconOpacity }}>
          <span className={styles.arrow}></span>
        </a>

          <div className={styles.content} ref={aboutRef}>
            <h1 className={styles.title}>
              My Skills
            </h1>
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

      </main>

      <footer ref={footerRef} className={styles.footer}>
        <Contact/>
        <p className={styles.copyright}>&copy; All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}
