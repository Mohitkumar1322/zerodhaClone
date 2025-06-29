import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signin.css'; // optional

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
        // ✅ redirect to dashboard
        navigate("/dashboard");
      }
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signin failed');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Signin;
