import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';  // 🔥 Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3002/signup',
        formData,
        { withCredentials: true }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="signup-input"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">Sign Up</button>

        {message && <p className="signup-message">{message}</p>}
      </form>
    </div>
  );
}

export default Signup;
