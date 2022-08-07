import styles from '../styles/index.module.css';

import { useRef, useState } from 'react';

import Head from 'next/head';

export default function Home() {
  const FORM_FIELDS = Object.freeze({
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
  });

  const [input, setInput] = useState('');

  const inputRef = useRef();
  //! Use typescript enums

  const onSubmitHandler = (event) => event.preventDefault(); //! TYPES

  const clickHandler = () => console.log('Clicked'); //! TYPES

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>App</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.header}>
        <h1>App</h1>
        <p>Create account</p>
      </header>
      <main className={styles.card}>
        <div className={styles.toggle_wrapper}>
          <button className={styles.toggle}>Login</button>
          <button className={`${styles.toggle} ${styles.active}`}>
            Signup
          </button>
        </div>
        <form
          className={styles.form_wrapper}
          method="POST"
          onSubmit={onSubmitHandler}
        >
          <div className={styles.input_group}>
            <label htmlFor={FORM_FIELDS.USERNAME}>{FORM_FIELDS.USERNAME}</label>
            <input type="text" id={FORM_FIELDS.USERNAME} />
          </div>
          <div className={styles.input_group}>
            <label htmlFor={FORM_FIELDS.EMAIL}>{FORM_FIELDS.EMAIL}</label>
            <input type="email" id={FORM_FIELDS.EMAIL} />
          </div>
          <div className={styles.input_group}>
            <label htmlFor={FORM_FIELDS.PASSWORD}>{FORM_FIELDS.PASSWORD}</label>
            <input type="password" id={FORM_FIELDS.PASSWORD} />
          </div>
          <button
            type="submit"
            className={styles.button_solid}
            onClick={clickHandler}
          >
            Create account
          </button>
          {/* <div className={styles.footer}>
            <p>
              Already have an account?{' '}
              <button className={styles.button} onClick={clickHandler}>
                Login
              </button>
            </p>
          </div> */}
        </form>
      </main>
    </div>
  );
}
