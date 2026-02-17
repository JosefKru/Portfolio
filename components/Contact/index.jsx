import { createRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './index.module.scss'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export const contactRef = createRef(null)
export const nameInputRef = createRef(null)

const Contact = ({ isEnglish }) => {
  const [isSending, setIsSending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const { ref: nameRegisterRef, ...nameRegisterRest } = register('name', {
    required: true,
  })

  const onSubmit = async () => {
    setIsSending(true)
    try {
      await sendEmail()
      toast.success(
        isEnglish
          ? 'Your message has been sent'
          : 'Ваше сообщение было отправлено',
        {
          duration: 5000,
          iconTheme: {
            primary: '#4b86b4',
            secondary: '#fff',
          },
        }
      )
      reset()
    } catch (error) {
      toast.error(
        isEnglish
          ? 'Failed to send message. Please try again.'
          : 'Не удалось отправить сообщение. Попробуйте снова.',
        {
          duration: 5000,
        }
      )
      console.error('EmailJS error:', error)
    } finally {
      setIsSending(false)
    }
  }

  const sendEmail = () => {
    return emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      contactRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
          placeholder={isEnglish ? 'Name' : 'Имя'}
          {...nameRegisterRest}
          ref={(e) => {
            nameRegisterRef(e)
            nameInputRef.current = e
          }}
          style={errors?.name && { borderColor: '#e3adad' }}
        />

        <input
          type='email'
          name='email'
          placeholder={isEnglish ? 'Email' : 'Эл. Почта'}
          {...register('email', { required: true })}
          style={errors?.email && { borderColor: '#e3adad' }}
        />

        <textarea
          name='message'
          placeholder={isEnglish ? 'Message' : 'Сообщение'}
          {...register('message', { required: true })}
          style={errors?.message && { borderColor: '#e3adad' }}
        />

        {(errors?.name || errors?.email || errors?.message) && (
          <p>
            {isEnglish
              ? 'Please fill in all fields'
              : 'Пожалуйста, заполните все поля'}
          </p>
        )}
        <input
          type='submit'
          value={
            isSending
              ? isEnglish
                ? 'Sending...'
                : 'Отправка...'
              : isEnglish
              ? 'Send message'
              : 'Отправить'
          }
          disabled={isSending}
        />
      </form>
    </>
  )
}

export default Contact
