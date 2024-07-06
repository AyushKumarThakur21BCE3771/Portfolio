import React from 'react'
import './ContactMe.css'
import email from "../../images/email.png"
import github from "../../images/github.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import ContactForm from "./contactForm/ContactForm"

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact'>
        <h5>Contact Me</h5>
        <div className="contact-content">
          <ContactForm />
        </div>
    </section>
  )
}

export default ContactMe
