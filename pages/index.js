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
  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = useState(1);
  const [width, setWidth] = useState(0)

  const router = useRouter();
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const footerRef = React.useRef();
  const pageSplitTimes = 1.4;
  var scrollDirectionDown = true;
  const date = new Date();
  const MENU_LIST = [
    { text: "Home", href: "/", ref: homeRef },
    { text: "About", href: "/about", ref: aboutRef },
    { text: "My Work", href: "/work", ref: projectsRef },
    { text: "Contact", href: "/contact", ref: footerRef },
  ];

  const formattedTime = (date) => {
    return date.toLocaleTimeString([], { timeZoneName: 'short', hour12: true, hour: '2-digit', minute: '2-digit' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =  document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled =(winScroll / height) * 100
      setScrollPercent(scrolled);
      setScrollY(window.scrollY);
      var top  = window.pageYOffset || document.documentElement.scrollTop,
      left = window.pageXOffset || document.documentElement.scrollLeft;
      console.log(top, left)
      // Get local scroll direction for sticky header
      const currentScroll = window.pageYOffset;
      setLastScrollTop(window.pageYOffset);

      if (currentScroll <= 0) {
        setActiveIdx(0)
        setNavActive(true);
      } else if(scrollPercent >= 99){
        setActiveIdx(3)
        setNavActive(true);
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
    setScrollIconOpacity(position);

    // var scrollDistance = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    // if (scrollDistance > lastScrollTop) {
    //     scrollDirectionDown = true;
    // } else {
    //     scrollDirectionDown = false;
    // }
    setWidth(Math.max(
      document.documentElement["clientWidth"],
      document.body["scrollWidth"],
      document.documentElement["scrollWidth"],
      document.body["offsetWidth"],
      document.documentElement["offsetWidth"]
    ))

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY, lastScrollTop, navActive, scrollPercent])
  
  
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

  return (
    <>
    <div id='root' className={styles.root}>
        <header className={`${navActive ? "scrollUp" : "scrollDown"}`}> 
          <nav className={`nav`}>
              <div onClick={() => {scrollToTop(homeRef)}}>
                  <code className="logoText">{`JF`}</code>
              </div>

              <div className={`nav__menu-list`}>
                  <button className={`mode-switch` + (theme === 'dark' ? ' active' : '')} onClick={toggleTheme}>
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
                    <a href="john_furlong_resume_2023.pdf" target="_blank" rel="noopener noreferrer"  className={styles.headerCta}>
                      <span>Resume</span>
                    </a>
              </div>
          </nav>
      </header>


      <div className={styles.hero} ref={homeRef}>
        <div className={styles.particlesText}>
          <span className={styles.myNameIs}>Hi, my name is</span>
          <span ref={titleRef}>
            <h1 className={`${styles.heroTitle}`}>John Furlong.</h1>
          </span>
          <span ref={subtitleRef}>
            <p className={`${styles.heroSubtitle}`}>Full Stack Software Engineer</p>
          </span>
          <p className={styles.heroDesc}>
            {`I'm a software engineer specialized in building scalable systems for the web. I enjoy creating outstanding user experiences end to end, whether it's an interface or an API. `}
          </p>
          <button className={styles.cta} onClick={() => {scrollTo(footerRef, 3)}}>
            Contact Me
          </button>
        </div>
      </div>

      <Head>
        <title>John Furlong | Portfolio</title>
        <meta name="description" content="John Furlong portfolio" />
        <link rel="icon" href="books.png"/>
      </Head>
      <Script src="https://kit.fontawesome.com/82944284a3.js"/>

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
            width={width}
          />
        </main>
      </div>
      <footer ref={footerRef} className={styles.footer}>
        <Contact/>
        <div className={styles.bottomText}>
          <span className={styles.col}>
            <p className={styles.copyright}>VERSION</p>
            <p className={styles.copytextright}>{date.getFullYear()} &copy; Edition</p>
          </span>
          <span className={styles.col}>
            <p className={styles.copyright}>LOCAL TIME</p>
            <p className={styles.text}>
              {formattedTime(date)}
            </p>
          </span>
        </div>
      </footer>
    </>
  )
}
