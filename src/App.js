import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn && <Navbar />}
      <div className="main-content">
        {isLoggedIn ? <Dashboard /> : <LoginPage onLogin={handleLogin} />}
      </div>
    </div>
  );
}

export default App;