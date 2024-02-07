import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send a reset password link to the provided email address.
    setMessage(`A password reset link has been sent to ${email}. Please check your email.`);
  };

  return (
    <div>
            <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />
        <title>Auction Platform</title>
      </Helmet>
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
         <strong>Email:</strong>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Remember your password? <Link to="/">Sign In</Link>
      </p>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
