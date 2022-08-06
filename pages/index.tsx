import Head from 'next/head';
import { useRef, useState } from 'react';
import styles from '../styles/index.module.css';

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
        <title>Linda Pomaa</title>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
      </Head>
      <header className={styles.header}>
        <h1>App name</h1>
        <p>Create account</p>
      </header>
      <div className={styles.card}>
        <form method="POST" onSubmit={onSubmitHandler}>
          <header>
            <button className={styles.toggle}>Login</button>
            <button className={styles.toggle}>Signup</button>
          </header>
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
        </form>
        <button type="submit" className={styles.button} onClick={clickHandler}>
          Create account
        </button>
        <div>
          <p>
            Already have an account?
            <button
              type="submit"
              className={styles.button}
              onClick={clickHandler}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
