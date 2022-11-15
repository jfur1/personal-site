import React from 'react'
import Head from 'next/head'

import styles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <>
          <Head>
        <title>John Furlong | Portfolio</title>
        <meta name="description" content="John Furlong portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/82944284a3.js" crossorigin="anonymous"></script>
      </Head>

    <section className={styles.contact}>
      
      <h1 className={styles.sectionHeader}>Contact</h1>
      
      <div className={styles.contactWrapper}>
      
        
        <form id="contact-form" className={styles.formHorizontal} role="form">
          
          <div className={styles.formGroup}>
            <div className={styles.col}>
              <input type="text" className={styles.formControl} id="name" placeholder="NAME" name="name" defaultValue="" required/>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.col}>
              <input type="email" className={styles.formControl}  id="email" placeholder="EMAIL" name="email" defaultValue="" required/>
            </div>
          </div>

          <textarea className={styles.contact} rows="10" placeholder="MESSAGE" name="message" required></textarea>
          
          <button className={styles.sendButton} id="submit" type="submit" value="SEND">
            <div className={styles.altSendButton}>
              <i className="fa fa-paper-plane"></i><span className={styles.sendText}>SEND</span>
            </div>
          
          </button>
          
        </form>
        
        
          <div className={styles.directContactContainer}>

            <ul className={styles.contactList}>
              
              <li className={styles.listItem}><i className="fa fa-phone fa-2x"><span className={`${styles.contactText} ${styles.phone}`}><a href="tel:1-267-884-6835" title="Give me a call">(267) 884-6835</a></span></i></li>
              
              <li className={styles.listItem}><i className="fa fa-envelope fa-2x"><span className={`${styles.contactText} ${styles.gmail}`}><a href="mailto:#" title="Send me an email">johnfurlong24@gmail.com</a></span></i></li>
              
            </ul>

            <hr/>
            <ul className={styles.socialMediaList}>
              <li><a href="https://github.com/jfur1" target="_blank" className={styles.contactIcon}>
                <i className="fa fa-github" aria-hidden="true"></i></a>
              </li>
              <li><a href="https://www.linkedin.com/in/jfur1/" target="_blank" className={styles.contactIcon}>
                <i class="fab fa-linkedin"></i></a>
              </li>
              <li><a href="#" target="_blank" className={styles.contactIcon}>
                <i class="fa fa-envelope"></i></a>
              </li>
              <li><a href="#" target="_blank" className={styles.contactIcon}>
                <i className="fa fa-codepen" aria-hidden="true"></i></a>
              </li>       
            </ul>
            <hr/>

            <div className={styles.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>

          </div>
        
      </div>
      
    </section>  
    </>
  
  )
}

export default Contact