import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import {  Button,Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save JWT token
      navigate('/home'); // Redirect to home page on successful login
    } catch (err) {
      if (err.response) {
        // Client received an error response (5xx, 4xx)
        setError(err.response.data.msg || 'An error occurred');
      } else if (err.request) {
        // Client never received a response, or request never left
        setError('No response from server');
      } else {
        // Anything else
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>Don't have an account?</p>
          <Col xs="auto">
              <Link to ='/signup'>
              <Button type="submit" variant="warning">Signup</Button>
              </Link>
            </Col>
        </div>
      </form>
    </div>
  );
};

export default Login;
