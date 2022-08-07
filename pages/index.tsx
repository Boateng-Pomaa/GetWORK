import styles from '../styles/index.module.css';

import React, { useRef, useState } from 'react';

import Head from 'next/head';

export default function Home() {
  const [activeTab, setActiveTab] = useState('signup');
  const [disableButton, setDisableButton] = useState(true);
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  const payload = {
    method: 'POST',
    body: JSON.stringify(userInput),
    headers: { 'Content-Type': 'application/json' },
  };

  enum FORM_FIELDS {
    USERNAME = 'username',
    EMAIL = 'email',
    PASSWORD = 'password',
  }

  /**************************
   *        HANDLERS        *
   **************************/
  function inputHander(event: React.ChangeEvent<HTMLInputElement>) {
    // Enables button
    if (
      (userInput.username !== '' || userInput.email !== '') &&
      userInput.password !== ''
    ) {
      setDisableButton(false);
    }

    // Gets values from input fields
    switch (event.currentTarget.id) {
      case 'username':
        setUserInput((prevState) => {
          return { ...prevState, username: event.target.value };
        });

        break;

      case 'email':
        setUserInput((prevState) => {
          return { ...prevState, email: event.target.value };
        });

        break;

      case 'password':
        setUserInput((prevState) => {
          return { ...prevState, password: event.target.value };
        });

        break;
    }
  }

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const loginHandler = () => {
    fetch('🔥🔥 Put the login endpoint here 🔥🔥', payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signupHandler = () => {
    fetch('🔥🔥 Put the signup endpoint here 🔥🔥', payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.id);
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
