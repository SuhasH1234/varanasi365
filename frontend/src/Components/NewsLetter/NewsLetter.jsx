import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // Track form submission status
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('access_key', '7f6137c6-fef5-406a-aa04-43f67b98fb86'); // Replace with your actual Web3Forms access key
    formData.append('email', email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setEmail(''); // Clear input field after successful submission
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {status === 'success' && <p className="success-message">Thank you for subscribing!</p>}
      {status === 'error' && <p className="error-message">Something went wrong. Please try again.</p>}
    </div>
  );
};

export default NewsLetter;