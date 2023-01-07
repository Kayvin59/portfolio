/* eslint-disable no-console */
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './ContactForm.module.scss'

type FormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({ mode: 'onChange' })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmitForm = async (data: FormData) => {
    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      console.log(response.status)

      if (response.status === 201) {
        reset()
        setIsSubmitted(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const contactFormOptions = {
    firstName: { required: 'Please enter a first name' },
    lastName: { required: 'Please enter a last name' },
    email: {
      required: 'Please enter an email',
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: 'Please enter a valid email address'
      }
    },
    message: {
      required: 'Please enter a message',
      maxLength: {
        value: 200,
        message: 'Message must have maximum 200 characters'
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="firstName">
            Prénom
            <input
              type="text"
              id="firstName"
              {...register('firstName', contactFormOptions.firstName)}
            />
            {errors?.firstName && (
              <span className={styles.errorMsg}>
                {errors.firstName.message}
              </span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lastName">
            Nom
            <input
              type="text"
              id="lastName"
              {...register('lastName', contactFormOptions.lastName)}
            />
            {errors?.lastName && (
              <span className={styles.errorMsg}>{errors.lastName.message}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              {...register('email', contactFormOptions.email)}
            />
            {errors?.email && (
              <span className={styles.errorMsg}>{errors.email.message}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Tapez votre message ici
            <textarea
              id="message"
              {...register('message', contactFormOptions.message)}
            />
            {errors?.message && (
              <span className={styles.errorMsg}>{errors.message.message}</span>
            )}
          </label>
        </div>

        <button className={styles.button} type="submit">
          Envoyer
        </button>
      </form>
      {isSubmitted && <p className={styles.validationMsg}>Message envoyé !</p>}
    </div>
  )
}

export default ContactForm
