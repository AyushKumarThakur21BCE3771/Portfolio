import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="https://formspree.io/f/xqkrjvaw" method="POST">
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea
          type="text"
          name="message"
          id=""
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
