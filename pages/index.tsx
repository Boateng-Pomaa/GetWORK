// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
// import styles from './index.module.css';

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
    <div className={styles.card}>
      <header>
        <button>Login</button>
        <button>Signup</button>
      </header>
      <form method="POST" onSubmit={onSubmitHandler}>
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
      <button type="submit" className="button" onClick={clickHandler}>
        Create account
      </button>
      <div>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}
