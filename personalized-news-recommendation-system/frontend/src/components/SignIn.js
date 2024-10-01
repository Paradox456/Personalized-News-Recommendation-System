// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // Import CSS for styling

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    receiveUpdates: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="logo">
          <span className="asterisk">#</span> NewsWiz
        </div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="receiveUpdates"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
            />
            <label htmlFor="receiveUpdates">
              I want to receive updates via email.
            </label>
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
          <p className="account-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
          <div className="separator">
            <span>or</span>
          </div>
          <div className="button-container">
            <button type="button" className="google-button">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                Sign up with Google
            </button>
            <button type="button" className="facebook-button">
                <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook logo" />
                Sign up with Facebook
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
