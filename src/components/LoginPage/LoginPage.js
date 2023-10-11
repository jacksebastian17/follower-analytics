import React from 'react';

function LoginPage({ onLogin }) {
  return (
    <div className="login-page">
      <h2>Follower Analytics</h2>
      <button className="login-button" onClick={onLogin}>Login with Instagram</button>
    </div>
  );
}

export default LoginPage;