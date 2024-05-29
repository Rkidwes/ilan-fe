// https://www.peterlunch.com/blog/nextjs-mailchimp
// https://www.noahmatsell.ca/blog/nextjs-mailchimp-subscribe-form

"use client"

import { useRef } from 'react';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const createFormData = () => {
    const formData = new FormData();
    formData.set('email', 'wes')
  }

  let emailAddy = inputRef.current.value

  const subscribeUser = async (e) => {
    e.preventDefault();

    // const formData = createFormData() 

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email_address: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
    console.log('Response from API ', res)
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Enter your email...
      </label>

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Enter your email..."
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" value="" name="subscribe">
        Subscribe
      </button>
    </form>
  );
}