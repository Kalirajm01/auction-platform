import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/signup.css';
import { Helmet } from 'react-helmet';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Buyer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (username.trim() === '' || password.trim() === '' || reenterPassword.trim() === '' || email.trim() === '') {
  //     setError('Please fill in all fields.');
  //     return;
  //   }

  //   if (password !== reenterPassword) {
  //     setError('Passwords do not match. Please reenter.');
  //     return;
  //   }

  //   try {
  //     // Here, you would make an API call to your backend for user registration
  //     // Replace this logic with your actual signup API call

  //     // For demonstration purposes, assume a successful signup after a short delay
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // Redirect to the signin page after successful signup
  //     navigate('/');
  //   } catch (error) {
  //     setError('Error during signup. Please try again.');
  //   }
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          role,
        }),
      });

      if (response.ok) {
        // Assume a successful signup after a short delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirect to the signin page after successful signup
        navigate('/');
      } else {
        const errorMessage = await response.text();
        setError(`Error during signup: ${errorMessage}`);
      }
    } catch (error) {
      setError('Error during signup. Please try again.');
    }
  };


  return (
    <div className="container">
            <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />
        <title>Auction Platform - SignUp</title>
      </Helmet>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username"><strong>Username:</strong></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password"><strong>Password:</strong></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="reenterPassword"><strong>Re-enter Password:</strong></label>
        <input
          type="password"
          id="reenterPassword"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
          required
        />

        <label htmlFor="email"><strong>Email ID:</strong></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="role"><strong>Role:</strong></label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
          <option value="Admin">Admin</option>
        </select>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>

      <div className="footer">
        <p>&copy; 2024 Done by <strong>Kaliraj M & Sridhar R</strong>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignUpPage;
