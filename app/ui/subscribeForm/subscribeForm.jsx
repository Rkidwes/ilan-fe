"use client";

import { useState } from 'react';
import styles from './subscribeForm.module.scss'
import clsx from 'clsx';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      const errorMessage = JSON.stringify(data.error);
      if (res.ok) {
        setSuccess(true);
        setMessage('Subscription successful! Please check your email to confirm.');
        setEmail('')
      } else {
        // setMessage('An error occurred.');
        console.log('Result: ', errorMessage)
        if (errorMessage.includes('Member Exists')) {
          setMessage(`This email address is already subscribed. If you're not receiving emails please contact us at admin@ilanbluestone.com`);
        } else if (errorMessage.includes('Invalid Resource')) {
          setMessage(`This email address seems fake or invalid. Please check it and try again. If you think this is an error please contact us at admin@ilanbluestone.com`);
        } else {
          setMessage(data.error || 'An error occurred.');
        }
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  // Possible repsonses
  // rkidwes@hotmail.com is already a list member. Use PUT to insert or update list members.
  // Member Exists

  // test@test.com looks fake or invalid, please enter a real email address.
  // Invalid Resource

  // An email is required to subscribe - please add an email above

  // Subscription successful! Please check your email to confirm.

  // Forgotten Email Not Subscribed


  return (
    <div>
      <form onSubmit={handleSubmit}
      className={styles.form}>
        <label
          htmlFor="email">
          <span className="sr-only">Email:</span>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className={clsx(styles.message, success && styles.success)}>{message}</p>}
    </div>
  );
};

export default SubscribeForm;