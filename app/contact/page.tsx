// app/contact/page.tsx
"use client" ;
import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactPage:React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Message sent!');
  };

  return (
    <div className='min-h-0 bg-cover  bg-[url(https://www.shutterstock.com/image-photo/various-running-shoes-laid-on-260nw-275137631.jpg)] p-5'>
    <div className={styles.container}>
      <h1 className='bg-yellow-500 p-2 font-bold' >Contact Us </h1>
      <p className='text-yellow-500'>Have questions about our shoes? We'd love to hear from you!</p>
      <form 
      onSubmit={handleSubmit}>
        <input className={styles.input}
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input  className={styles.input}
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea className={styles.textarea}
          placeholder="Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit" className={styles.button} >Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;