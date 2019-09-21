import React from 'react';
import { Link } from 'react-router-dom';
import Ul from '../../components/Ul';

const Dashboard = () => (
  <nav>
    <Ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </Ul>
  </nav>
);

export default Dashboard;
