import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './index.module.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2e1bo9r',
        'template_efeylm4',
        form.current,
        'Ub7F2x9MTVHibIcxU'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input type='text' name='user_name' placeholder='Name' />

      <input type='email' name='user_email' placeholder='Email' />

      <textarea name='message' placeholder='Message' />

      <input type='submit' value='Send' />
    </form>
  )
}

export default Contact
