import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signin.css';

function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3002/api/signin',
        formData,
        { withCredentials: true }
      );
      if (res.data.success) {
  window.location.href = "http://localhost:3000/dashboard"; // ✅ open dashboard running on 3000
}
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signin failed');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-title">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signin-input"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signin-input"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="signin-button">Sign In</button>

        {message && <p className="signin-message">{message}</p>}

        <p className="signin-link">
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Signin;
