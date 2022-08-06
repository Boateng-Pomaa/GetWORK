// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import styles from './index.module.css';

export default function Home() {
  const FORM_FIELDS = Object.freeze({
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
  });

  //! Use typescript enums

  return (
    <main className={styles.main}>
      <h1>Create account</h1>
      <div>
        <div className={styles.input_group}>
          <label htmlFor={FORM_FIELDS.USERNAME}>{FORM_FIELDS.USERNAME}</label>
          <input type="text" id={FORM_FIELDS.USERNAME} />
        </div>
        <div className={styles.input_group}>
          <label htmlFor={FORM_FIELDS.EMAIL}>{FORM_FIELDS.EMAIL}</label>
          <input type="text" id={FORM_FIELDS.EMAIL} />
        </div>
        <div className={styles.input_group}>
          <label htmlFor={FORM_FIELDS.PASSWORD}>{FORM_FIELDS.PASSWORD}</label>
          <input type="text" id={FORM_FIELDS.PASSWORD} />
        </div>
      </div>
      <button className="button">Create account</button>
      <div>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </main>
  );
}
