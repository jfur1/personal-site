import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ParticleBackround from '../components/Particles'
import { useInView } from 'react-intersection-observer'
import Contact from './contact.jsx'

export default function Home() {
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  const { ref: subtitleRef, inView: subtitleIsVisible } = useInView();
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

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>My Work &rarr;</h2>
            <p>Take a look at some of my past projects!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <Contact/>
      </footer>
    </div>
  )
}
