'use client'

import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google';
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message:""
    });
     const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }


  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
              <label htmlFor="username" className={ styles.label}>Name
                  <input type="text" name='username' id='username' placeholder='Enter your name'  className={mulish.className} onChange={handleChange} />
              </label>
          </div>
          <div className={styles.input_field}>
              <label htmlFor="email" className={ styles.label}>Email
                  <input type="text" name='email' id='email' placeholder='Enter your email'  className={mulish.className} onChange={handleChange} required/>
              </label>
          </div>
          <div className={styles.input_field}>
              <label htmlFor="phone" className={ styles.label}>Phone number
                  <input type="number" name='phone' id='phone' placeholder='Enter your number'  className={mulish.className} onChange={handleChange} required/>
              </label>
          </div>
          <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={mulish.className}
                               value={user.message}
                               onChange={handleChange}
                               required
                                autoComplete="off"
                    />
                </label>
          </div>
          <div >
              {status === 'success' && <p className={styles.success_msg}>Thanks for your message</p>}
              { status === 'error' && <p className={styles.error_msg}>Thare is an error submitting your messange, please try again.</p>}
          </div>
          <button type="submit" className={mulish.className}>Send Message</button>
    </form>
  )
}

export default ContactForm
