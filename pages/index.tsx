import styles from '../styles/index.module.css';

import { useRef, useState } from 'react';

import Head from 'next/head';

export default function Home() {
  const [activeTab, setActiveTab] = useState('signup');
  const [disableButton, setDisableButton] = useState(true);
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  const toggleHandler = (event) => {
    setActiveTab(event.target.id);
  }; //! TYPES

  const FORM_FIELDS = Object.freeze({
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
  });
  //! Ofui! use typescript enums

  const inputRef = useRef().current;

  function inputHander(event) {
    console.log('Hello');

    // Enables button
    if (
      userInput.username !== '' &&
      userInput.email !== '' &&
      userInput.password !== ''
    ) {
      setDisableButton(false);
      console.log('🤩🤩🤩🤩');
    }

    // Gets values from input fields
    switch (event.target.id) {
      case 'username':
        console.log('Username field');
        setUserInput((prevState) => {
          return { ...prevState, username: event.target.value };
        });
        console.log(userInput);
        break;

      case 'email':
        console.log('Email field');
        setUserInput((prevState) => {
          return { ...prevState, email: event.target.value };
        });
        console.log(userInput);
        break;

      case 'password':
        console.log('Email field');
        setUserInput((prevState) => {
          return { ...prevState, password: event.target.value };
        });
        console.log(userInput);
        break;
    }
  }

  const formHandler = (event) => event.preventDefault(); //! TYPES

  const payload = {
    method: 'POST',
    body: JSON.stringify(userInput),
    headers: { 'Content-Type': 'application/json' },
  };

  const loginHandler = () => {
    console.log(userInput);

    /* 🔥🔥 Put the signup endpoint here 🔥🔥*/
    fetch('', payload)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signupHandler = () => {
    console.log(userInput);

    /* 🔥🔥 Put the signup endpoint here 🔥🔥*/
    fetch('', payload)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>App</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.card}>
        <div className={styles.toggle_wrapper}>
          <button
            id="login"
            type="button"
            className={`${styles.toggle} ${
              activeTab === 'login' ? styles.active : ''
            }`}
            onClick={toggleHandler}
          >
            Login
          </button>
          <button
            id="signup"
            type="button"
            className={`${styles.toggle} ${
              activeTab === 'signup' ? styles.active : ''
            }`}
            onClick={toggleHandler}
          >
            Signup
          </button>
        </div>
        <form method="POST" onSubmit={formHandler}>
          {activeTab === 'signup' && (
            <div className={styles.input_group}>
              <label htmlFor={FORM_FIELDS.USERNAME}>
                {FORM_FIELDS.USERNAME}
              </label>
              <input
                type="text"
                id={FORM_FIELDS.USERNAME}
                required
                ref={inputRef}
                onChange={inputHander}
              />
            </div>
          )}
          <div className={styles.input_group}>
            <label htmlFor={FORM_FIELDS.EMAIL}>{FORM_FIELDS.EMAIL}</label>
            <input
              type="email"
              id={FORM_FIELDS.EMAIL}
              required
              onChange={inputHander}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor={FORM_FIELDS.PASSWORD}>{FORM_FIELDS.PASSWORD}</label>
            <input
              type="password"
              id={FORM_FIELDS.PASSWORD}
              required
              onChange={inputHander}
            />
          </div>
          {activeTab === 'login' ? (
            <button
              type="submit"
              className={`${styles.button_solid} ${
                disableButton ? styles.disabled : ''
              }`}
              onClick={loginHandler}
              disabled={disableButton && true}
            >
              Login
            </button>
          ) : (
            <button
              type="submit"
              className={`${styles.button_solid} ${
                disableButton ? styles.disabled : ''
              }`}
              onClick={signupHandler}
              disabled={disableButton && true}
            >
              Create account
            </button>
          )}
        </form>
      </main>
    </div>
  );
}
