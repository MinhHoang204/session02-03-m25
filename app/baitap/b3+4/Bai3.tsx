import React from 'react'
import styles from "./bai3.module.css"
export default function Bai3() {
  return (
    <form className={styles.form}>
      <h2 className={styles.heading}>Form Sign up</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" placeholder="Your name" className={styles.input} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" placeholder="you@company.com" className={styles.input} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone" className={styles.label}>Phone number</label>
        <div className={styles.phoneInput}>
          <select className={styles.countryCode}>
            <option>US</option>
            <option>VN</option>
            <option>UK</option>
          </select>
          <input type="tel" id="phone" placeholder="+84 (123) 456-789" className={styles.input} />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="address" className={styles.label}>Address</label>
        <textarea id="address" placeholder="Tell us a little about the project..." className={styles.textarea}></textarea>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Skills</label>
        <div className={styles.skills}>
          <label>
            <input type="checkbox" /> HTML
          </label>
          <label>
            <input type="checkbox" /> CSS
          </label>
          <label>
            <input type="checkbox" /> JavaScript
          </label>
          <label>
            <input type="checkbox" /> UX design
          </label>
          <label>
            <input type="checkbox" /> ReactJS
          </label>
          <label>
            <input type="checkbox" /> Java
          </label>
        </div>
      </div>

      <button type="submit" className={styles.button}>Sign up</button>
    </form>
  )
}
