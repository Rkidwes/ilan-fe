'use client';

import React, { useState } from 'react';
import clsx from 'clsx'
import styles from './eventForm.module.scss'
import btnStyles from '../base/button/button.module.scss'

const EventForm = () => {
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventName: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        try {
            const res = await fetch('/api/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ formData }),
            });
      
            const data = await res.json();

            if (res.ok) {
                setMessage({ __html: '<p>Your submission has been successful! <br>We will be in touch as soon as possible.</p>'});
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventName: '',
                    details: ''
                })
            } else {
              setMessage('An error occurred.');
              console.log('Error in submission', error)
            }
          } catch (error) {
            setMessage('An error occurred.');
            console.log('Unsent error', error)
          }

    };

    return (
        <form onSubmit={handleSubmit} aria-label="Event enquiry form" className={styles.bookingForm}>
            <fieldset>
                <div>
                    <label htmlFor="name" className='sr-only'>Name (required):</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className='sr-only'>Email (required):</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="Enter your email address"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className='sr-only'>Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your telephone"
                    />
                </div>
                <div>
                    <label htmlFor="eventName" className='sr-only'>Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        placeholder="Enter the name of the event"
                    />
                </div>
                <div>
                    <label htmlFor="details" className='sr-only'>Additional Information:</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Enter any additional information here"
                    ></textarea>
                </div>
                {message && (<div className={styles.message} dangerouslySetInnerHTML={message}></div>)}
            </fieldset>
            <button type="submit" className={clsx(btnStyles.btn, btnStyles.btnCta)}>Send Booking Enquiry</button>
        </form>
    );
};

export default EventForm;
