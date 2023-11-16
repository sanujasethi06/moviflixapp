import React from 'react'
import ContactCard from '../component/ContactCard'
import styles from "./contact.module.css";
import ContactForm from '../component/ContactForm';

const Page = () => {
  return (
    <>
          <div className={styles.container}>
            <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We'd  love to hear <span>from you</span></h2>
          <ContactForm />

         
        </section>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62209.83952436969!2d77.59233275216329!3d12.964494306292547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1379c630bc0d%3A0x2aa9087eaf3e63b8!2sSLNS%20PG%20for%20Gents!5e0!3m2!1sen!2sin!4v1700046622886!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </>
  )
}

export default Page
