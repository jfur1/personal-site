import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
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
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = useState(1);
  const router = useRouter();
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const footerRef = React.useRef();
  const pageSplitTimes = 1.4;
  var scrollDirectionDown = true;

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =  document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled =(winScroll / height) * 100
      setScrollPercent(scrolled);
      setScrollY(window.scrollY);

      // Get local scroll direction for sticky header
      const currentScroll = window.pageYOffset;
      console.log('CURRENT SCROLL',currentScroll )
      console.log('LAST SCROLL TOP',lastScrollTop )
      
      if (currentScroll <= 0 || scrollPercent >= 99) {
        setNavActive(true);
        return;
      }
      if( currentScroll > lastScrollTop && navActive)
        setNavActive(false)
      else if(currentScroll < lastScrollTop && !navActive)
        setNavActive(true)
        
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
    const documentElement = document.documentElement
    const body = document.body
    var scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > lastScrollTop) {
        scrollDirectionDown = true;
    } else {
        scrollDirectionDown = false;
    }
    
    console.log('SCROLL Y =', scrollY)
    console.log('SCROLL PERCENT =', scrollPercent)


    window.addEventListener("scroll", handleScroll);
    setScrollIconOpacity(position);
    setLastScrollTop(window.pageYOffset);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY])
  
  const scrollTo = (ref, scrollToNavIdx) => {
    console.log(ref.current)
    if (!ref.current) return;

    setLastScrollTop(0)
    setActiveIdx(scrollToNavIdx)
    ref.current.scrollIntoView({ alignToTop: false , behavior: "smooth" });
  }

  const scrollToTop = (ref) => {
    console.log(ref.current)
    if (!ref.current) return;

    setLastScrollTop(0)
    setActiveIdx(0)

    window.scrollTo({ top: 0, behavior: "smooth" });
    
  }

  const MENU_LIST = [
    { text: "Home", href: "/", ref: homeRef },
    { text: "About", href: "/about", ref: aboutRef },
    { text: "My Work", href: "/work", ref: projectsRef },
    { text: "Contact", href: "/contact", ref: footerRef },
  ];
  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
    <header className={`${navActive ? "scrollUp" : "scrollDown"}`}> 
      {/* className={`${navActive ? "scrollUp" : "scrollDown"}`} > */}
      <nav className={`nav`}>
      <div onClick={() => {scrollToTop(homeRef)}}>
            <code className="logoText">{`< John Furlong />`}</code>
        </div>

        <div className={`nav__menu-list`}>
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
        {/* <ParticleBackround/> */}
        <div className={styles.particlesText}>
          <span className={styles.myNameIs}>Hi, my name is</span>
          <span ref={titleRef}>
            <h1 className={`${styles.heroTitle}`}>John Furlong</h1>
          </span>
          <span ref={subtitleRef}>
            <p className={`${styles.heroSubtitle}`}>Full Stack Software Engineer</p>
          </span>
          <p className={styles.heroDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <Head>
        <title>John Furlong | Portfolio</title>
        <meta name="description" content="John Furlong portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://kit.fontawesome.com/82944284a3.js"/>
      </Head>

      <main className={styles.main}>
        { scrollPercent < 25 ?
         <a className={styles.arrowWrap} onClick={() => scrollTo(aboutRef)} style={{ opacity: scrollIconOpacity }}>
            <span className={styles.arrow}></span>
          </a>
        : null
        }

          <AboutMe 
            scrollPercent={scrollPercent} 
            scrollTo={scrollTo} 
            aboutRef={aboutRef} 
            footerRef={footerRef}
          />
          <MyWork 
            scrollPercent={scrollPercent}
            projectsRef={projectsRef}
          />
      </main>

      <footer ref={footerRef} className={styles.footer}>
        <Contact/>
        <p className={styles.copyright}>&copy; All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}
