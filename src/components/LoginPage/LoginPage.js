import React from 'react';
import './LoginPage.css';
import logo from '../../assets/images/black-logo-transparent.jpg';

function LoginPage({ onLogin }) {
  return (
    <div className="login-container">
      <div className="logo-section">
        <img src={logo} alt="Follower Analytics Logo" className="login-logo" />
        <h1 className="app-title">Follower Analytics</h1>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <button className="login-button" onClick={onLogin}>Login with Instagram</button>
      </div>
    </div>
  );
}

export default LoginPage;
