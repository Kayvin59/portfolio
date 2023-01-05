/* eslint-disable no-console */
import React, { useState } from 'react'

import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = {
      firstName,
      lastName,
      email,
      message
    }

    const response = await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await response.json()
    console.log(content)

    // Reset the form fields
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="firstName">
          First Name
          <input
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </label>

        <label className={styles.label} htmlFor="lastName">
          Last Name
          <input
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </label>

        <label className={styles.label} htmlFor="email">
          e-mail
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
          />
        </label>

        <label className={styles.label} htmlFor="message">
          message
          <textarea
            className={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default ContactForm
