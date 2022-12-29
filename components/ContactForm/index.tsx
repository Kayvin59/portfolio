import React from 'react'

import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line no-console
    console.log('Form submitted!')
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" name="firstName" required />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" name="lastName" required />
        </label>

        <label htmlFor="email">
          e-mail
          <input type="text" id="email" name="email" required />
        </label>

        <label htmlFor="message">
          message
          <input type="text" id="message" name="message" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
