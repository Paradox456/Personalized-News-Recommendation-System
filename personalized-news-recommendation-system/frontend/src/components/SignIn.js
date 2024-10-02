// src/components/SignIn.js
import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
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
    console.log(formData); // Handle form submission here (e.g., send data to API)
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Sign-In Success:', response);
    // You can now send the response to your backend to authenticate or create a user
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Sign-In Failed:', error);
  };

  const handleFacebookResponse = (response) => {
    console.log('Facebook Sign-In Success:', response);
    // Handle the Facebook response, e.g., send the data to your backend
  };

  return (
    <GoogleOAuthProvider clientId="741215184958-3r17fd4648lcmfpp0t9obu3req5lal8g.apps.googleusercontent.com">
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
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
              />
              <FacebookLogin 
              appId = '840772334530090'
              autoLoad={false}
              fields="name,email,picture"
              callback={handleFacebookResponse}
              icon="fa-facebook"
              textButton=" Sign up with Facebook"
              cssClass="facebook-button"
              />    
            </div>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignIn;
