import React from 'react';
import './Dashboard.css';
import { nonFollowers } from '../../utils/mockData';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Your Followers Analytics</h2>
      <ul>
        {nonFollowers.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
