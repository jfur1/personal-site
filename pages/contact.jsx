import React from 'react'
import Script from 'next/script'
import styles from '../styles/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <>
    <Script src="https://kit.fontawesome.com/82944284a3.js"/>

    <section className={styles.contactContainer}>
      
      <div className={styles.contactWrapper}>
        <h1 className={styles.sectionHeader}>Get in touch</h1>
        <h1 className={styles.headerText}>If you've made it this far it means you should drop me a note!</h1>
        
        <form id="contact-form" className={styles.formHorizontal} role="form">
          
          <div className={styles.formGrid}>
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

            <div className={styles.formGroup}>
              <div className={styles.col}>
                <input type="text" className={styles.formControl}  id="subject" placeholder="SUBJECT" name="text" defaultValue="" required/>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.col}>
                <input type="text" className={styles.formControl}  id="phone" placeholder="PHONE (Optional)" name="phone" defaultValue=""/>
              </div>
            </div>

            <div className={styles.formCol}>
              <textarea className={styles.contact} rows="5" placeholder="Message" name="message" required></textarea>
              <button className={styles.sendButton} id="submit" type="submit" value="SEND">
                <div className={styles.altSendButton}>
                  <i className="fa fa-paper-plane fa-2x"></i><span className={styles.sendText}>SUBMIT</span>
                </div>
              </button>
            </div>
          </div>
        </form>
        
        
          <div className={styles.directContactContainer}>
          <h1 className={styles.directContactTitle}>Contact Information</h1>
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <i className="fa fa-phone fa-2x"></i>
                <span className={`${styles.contactText} ${styles.phone}`}>
                  <a href="tel:1-267-884-6835" title="Give me a call">
                    (267) 884-6835
                  </a>
                </span>
              </li>
              <li className={styles.listItem}><i className="fa fa-envelope fa-2x"></i><span className={`${styles.contactText} ${styles.gmail}`}><a href="mailto:#" title="Send me an email">johnfurlong24@gmail.com</a></span></li>
            </ul>

            <hr className={styles.sectionLine}/>

            <ul className={styles.socialMediaList}>
              <li><a href="https://www.github.com/jfur1" id='gh' target="_tab" rel="noopener noreferrer" className={styles.contactIcon}>
                <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              </li>
              <li><a href="https://www.linkedin.com/in/jfur1/" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <i className="fa fa-linkedin fa-2x"></i></a>
              </li>
              <li><a href="docs/john-furlong-resume copy.pdf" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <i className="fa fa-id-card fa-2x"></i></a>
              </li>
              <li><a href="mailto:johnfurlong24@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
              </li>       
            </ul>
          </div>
          
      </div>
      
    </section>  
    </>
  
  )
}

export default Contact