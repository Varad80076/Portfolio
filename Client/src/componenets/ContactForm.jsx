import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

function ContactFormm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const collectData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-flame-rho-71.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || 'Failed to send the message.';
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Data sent successfully:', data);
      localStorage.setItem('contacts', JSON.stringify(data));
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <article className="rounded-2xl p-1 sm:p-6 w-[1000px] shadow-md" data-page="contact">
      <header>
        <h2 className="text-3xl font-bold text-white border-b-4 w-28 border-[#af862c] flex justify-start pb-2 mb-4">
          Contact
        </h2>
      </header>
      <section className="contact-form">
        <h3 className="text-2xl font-bold text-white flex justify-start pb-2 mb-4">Contact Form</h3>
        <form onSubmit={collectData} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              className="form-input px-4 py-2 border-gray-700 rounded-md bg-transparent text-white border-[1px]"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input px-4 py-2 border-gray-700 rounded-md bg-transparent text-white border-[1px]"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            name="message"
            className="form-input px-4 py-2 border-gray-700 rounded-md bg-transparent text-white w-full border-[1px]"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            className="flex flex-wrap float-end bg-[#202022] justify-center text-center h-10 p-2 px-3 rounded-lg w-fit"
            type="submit"
          >
            <FontAwesomeIcon icon={faTelegram} className="p-1 text-[#1e1b14]" />
            <span className="text-[#afa014]">Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default ContactFormm;

