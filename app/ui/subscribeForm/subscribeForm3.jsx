'use client';

import React from 'react'
import styles from './subscribeForm.module.scss';
import clsx from 'clsx'

function SubscribeForm() {
  const subscribeUser = async (e) => {
    e.preventDefault();

    const email = e.currentTarget.elements.email;

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 201) {
      console.log("success2");
    } else {
      console.log("error2");
    }
  };
  return (
    <form
      onSubmit={subscribeUser}
      className={styles.subscribeForm}
    >
      <label
        htmlFor="EMAIL"
      >
        Email
        <input
          id="EMAIL"
          type="email"
          name="email"
          required
        />
      </label>
      <button
        variant="secondary"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;