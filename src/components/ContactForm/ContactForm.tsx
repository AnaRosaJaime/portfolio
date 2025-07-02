import { useState } from 'react';
import styles from './style.module.css';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Me</h2>
      {submitted ? (
        <p className={styles.success}>✅ Your message has been sent!</p>
      ) : (
        <form
          className={styles.form}
          action="https://formsubmit.co/anajaimeperez@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};
