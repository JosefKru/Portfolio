import React, { createRef, forwardRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './index.module.scss'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export const contactRef = createRef(null)

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    sendEmail()
    toast.success('Your message has been sent', {
      duration: 5000,
      iconTheme: {
        primary: '#4b86b4',
        secondary: '#fff',
      },
    })
    reset()
  }

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'service_2e1bo9r',
        'template_efeylm4',
        contactRef.current,
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
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        ref={contactRef}
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          {...register('name', { required: true })}
          style={errors?.name && { borderColor: '#e3adad' }}
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          {...register('email', { required: true })}
          style={errors?.email && { borderColor: '#e3adad' }}
        />

        <textarea
          name='message'
          placeholder='Message'
          {...register('message', { required: true })}
          style={errors?.message && { borderColor: '#e3adad' }}
        />

        {(errors?.name || errors?.email || errors?.message) && (
          <p>Please fill in all fields</p>
        )}
        <input type='submit' value='Send message' disabled={!isValid} />
      </form>
    </>
  )
}

export default Contact
